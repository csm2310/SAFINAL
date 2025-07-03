from datetime import datetime, timedelta
from dotenv import load_dotenv
import os
import google.generativeai as genai
import openai

# === Load .env variables ===
load_dotenv()

# === Read API keys ===
GEMINI_KEY = os.getenv("GOOGLE_API_KEY")
OPENAI_KEY = os.getenv("OPENAI_API_KEY")

if not GEMINI_KEY and not OPENAI_KEY:
    raise EnvironmentError("❌ No API keys found. Set GOOGLE_API_KEY or OPENAI_API_KEY in your .env file.")

# === Configure APIs ===
if GEMINI_KEY:
    genai.configure(api_key=GEMINI_KEY)

if OPENAI_KEY:
    openai.api_key = OPENAI_KEY


# === Unified content generation handler ===
def generate_ai_content(prompt: str, model: str = "gemini") -> str:
    try:
        if model == "gemini":
            if not GEMINI_KEY:
                return "❌ Gemini API not available."
            gemini_model = genai.GenerativeModel("gemini-2.0-flash")
            return gemini_model.generate_content(prompt).text.strip()

        elif model == "openai":
            if not OPENAI_KEY:
                return "❌ OpenAI API not available."
            res = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}]
            )
            return res.choices[0].message.content.strip()

        else:
            return f"❌ Unsupported model: {model}"
    except Exception as e:
        return f"❌ Error: {e}"


# === Post content generator ===
def generate_post_content(idea: str, theme: str, model: str = "gemini") -> dict:
    prompt = f"""
Using the content idea: "{idea}" under the main theme "{theme}", create a professional and engaging social media post.

Include the following sections clearly:
[CONTENT]: 2-4 lines of post copy — use complete content, avoid any placeholders.
[HASHTAGS]: 5-10 relevant hashtags.
[CTA]: 1 strong call to action with a working URL like https://yourbrand.com (do not ask the user to add it).
"""
    output = generate_ai_content(prompt, model)
    sections = {"CONTENT": "", "HASHTAGS": "", "CTA": ""}
    current = None

    for line in output.splitlines():
        if "[CONTENT]" in line.upper():
            current = "CONTENT"
        elif "[HASHTAGS]" in line.upper():
            current = "HASHTAGS"
        elif "[CTA]" in line.upper():
            current = "CTA"
        elif current:
            sections[current] += line.strip() + " "

    return sections


# === 30-Day Calendar Generator ===
def generate_calendar(theme: str, model: str = "gemini") -> list:
    base_date = datetime.now()
    weekly_themes = {
        0: "Monday Motivation",
        1: "Tech Tuesday",
        2: "Work in Progress Wednesday",
        3: "Throwback Thursday",
        4: "Feature Friday",
        5: "Behind the Scenes Saturday",
        6: "Sunday Q&A"
    }

    calendar = []

    for i in range(30):
        date = base_date + timedelta(days=i)
        day = date.strftime("%A")
        sub_theme = weekly_themes[date.weekday()]

        idea_prompt = f"Generate a social media post idea for the theme '{theme}' under sub-theme '{sub_theme}'"
        idea = generate_ai_content(idea_prompt, model)

        post = generate_post_content(idea, theme, model)

        calendar.append({
            "date": date.strftime("%Y-%m-%d"),
            "day": day,
            "weekly_theme": sub_theme,
            "post_idea": idea,
            "content": post["CONTENT"],
            "hashtags": post["HASHTAGS"],
            "cta": post["CTA"],
            "approved": False
        })

    return calendar

if __name__ == "__main__":
    calendar = generate_calendar("Marketing Tips", model="openai")  # or "gemini"
    for post in calendar:
        print(post["date"], "-", post["post_idea"])
