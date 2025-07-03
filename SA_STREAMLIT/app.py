import streamlit as st
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta
import pandas as pd
import requests
import re

# === Load environment variables ===
load_dotenv()

# === API Keys ===
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
ACCESS_TOKEN = os.getenv("ACCESS_TOKEN")
IG_USER_ID = os.getenv("IG_USER_ID")

# === Setup Page ===
st.set_page_config(page_title="AI Social Scheduler", layout="wide")
st.title("📅 AI Content Calendar + Instagram Publisher")

# === Check Available Model ===
model_type = None

if GEMINI_API_KEY:
    import google.generativeai as genai
    genai.configure(api_key=GEMINI_API_KEY)
    gemini_model = genai.GenerativeModel("gemini-2.0-flash")
    model_type = "gemini"
elif OPENAI_API_KEY:
    from openai import OpenAI
    import openai
    openai.api_key = OPENAI_API_KEY
    model_type = "openai"
else:
    st.error("❌ Please provide at least one valid API key: GEMINI_API_KEY or OPENAI_API_KEY")
    st.stop()

# === Generate Content via Gemini or OpenAI ===
def generate_text(prompt):
    if model_type == "gemini":
        try:
            response = gemini_model.generate_content(prompt)
            return response.text.strip()
        except Exception as e:
            return f"❌ Gemini Error: {e}"
    elif model_type == "openai":
        try:
            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}]
            )
            return completion.choices[0].message.content.strip()
        except Exception as e:
            return f"❌ OpenAI Error: {e}"
    else:
        return "❌ No model available"

# === Instagram Publisher ===
def post_to_instagram(image_url, caption):
    try:
        media_url = f"https://graph.facebook.com/v18.0/{IG_USER_ID}/media"
        payload = {
            "image_url": image_url,
            "caption": caption,
            "access_token": ACCESS_TOKEN
        }
        media_res = requests.post(media_url, data=payload).json()
        if "id" not in media_res:
            return {"error": "Media creation failed", "response": media_res}

        publish_url = f"https://graph.facebook.com/v18.0/{IG_USER_ID}/media_publish"
        publish_res = requests.post(publish_url, data={
            "creation_id": media_res["id"],
            "access_token": ACCESS_TOKEN
        }).json()

        return {
            "message": "✅ Post published",
            "media_id": media_res["id"],
            "response": publish_res
        }
    except Exception as e:
        return {"error": str(e)}

# === Generate 30-Day Calendar ===
with st.expander("📆 Generate 30-Day Content Calendar"):
    theme = st.text_input("Enter Content Theme", placeholder="e.g. Fitness, AI Tools, Photography")
    if st.button("Generate Calendar") and theme:
        base_date = datetime.now()
        weekdays = {
            0: "Monday Motivation", 1: "Tech Tuesday", 2: "WIP Wednesday",
            3: "Throwback Thursday", 4: "Feature Friday", 5: "Behind-the-Scenes Saturday", 6: "Sunday Story"
        }

        prompt = f"""
Generate 30 creative Instagram post ideas based on the theme "{theme}".
Each idea should be short and engaging, suitable for Instagram.
Only return 30 bullet points without numbering.
"""

        result = generate_text(prompt)
        ideas_raw = result.strip().split("\n")
        ideas = [re.sub(r"^[\-\*\d\.\s]+", "", line.strip()) for line in ideas_raw if line.strip()]

        calendar = []
        for i in range(30):
            date = base_date + timedelta(days=i)
            weekday_theme = weekdays[date.weekday()]
            idea_text = ideas[i] if i < len(ideas) else "No idea generated"
            calendar.append({
                "Day": i + 1,
                "Date": date.strftime("%Y-%m-%d"),
                "Theme": weekday_theme,
                "Post Idea": idea_text
            })

        df = pd.DataFrame(calendar)
        st.session_state["calendar_df"] = df
        st.dataframe(df, use_container_width=True)

# === Generate Post + Publish ===
if "calendar_df" in st.session_state:
    df = st.session_state["calendar_df"]
    st.subheader("✍️ Generate Post for a Day")

    day = st.selectbox("Choose Day", df["Day"].tolist())
    row = df[df["Day"] == day].iloc[0]
    post_idea = row["Post Idea"]
    st.markdown(f"**🧠 Idea**: `{post_idea}`")

    # Generate Caption
    if st.button("📝 Generate Caption"):
        caption_prompt = f"""
Create a clean Instagram caption for this idea: "{post_idea}".
- 2–4 engaging lines
- 5–8 relevant hashtags at the end
- A short call to action
No tags like [CONTENT], [HASHTAGS], or [CTA].
"""
        caption = generate_text(caption_prompt)
        st.session_state["final_caption"] = caption
        st.text_area("✍️ Final Caption", value=caption, height=200)

    # Image Upload
    image_url = st.text_input("📎 Paste Your Image URL (Required)")
    if image_url:
        st.session_state["final_image_url"] = image_url
        st.image(image_url, caption="Custom Image", use_container_width=True)

    # Publish
    if st.button("📤 Publish to Instagram"):
        caption = st.session_state.get("final_caption", "")
        img_url = st.session_state.get("final_image_url", "")
        if not caption or not img_url:
            st.warning("⚠️ Both caption and image are required.")
        else:
            st.info("📡 Publishing to Instagram...")
            result = post_to_instagram(img_url, caption)
            if result.get("error"):
                st.error(f"❌ {result['error']}")
            else:
                st.success(result["message"])
                st.json(result["response"])
 