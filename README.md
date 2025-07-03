Here’s the **updated `README.md`** including your `.env` information for the **Flask backend**, and with environment variables clearly explained and structured:

---

```markdown
# 📊 Social Media Agent – Landing Platform

This repository contains the **Landing App** for our AI-powered Instagram Content Automation tool, developed during our internship at **Digital Dojo Pvt. Ltd.** It allows users to launch two sub-projects:
- 🧠 **CM Social Media Agent (React + Flask)**
- ⚡ **SR Social Media Agent (Streamlit)**

---

## 🧩 Folder Structure

```

SAFINAL/
│
├── landing-app/           # Main React landing app (hosted on Vercel)
├── app1-frontend/         # React frontend for App 1 (Instagram Scheduler)
├── app1-backend/          # Flask backend for Gemini/OpenAI + Instagram automation
├── SA\_STREAMLIT/          # Streamlit App (Caption Generator - App 2)

````

---

## 🚀 Features

- AI-generated Instagram captions (Gemini/OpenAI)
- Image fetching via DuckDuckGo
- Schedule or auto-publish posts via Meta Graph API
- Dual app launch interface from landing page
- Authentication via Clerk
- Modern responsive design with animations

---

## 🧪 ENVIRONMENT VARIABLES

### 🔒 `landing-app/.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_frontend_key_here
VITE_BACKEND_URL=http://127.0.0.1:5000
````

> ℹ️ Used by Vite to connect to the backend and Clerk for auth.

---

### ⚙️ `app1-backend/.env`

```env
# 🔑 Google Gemini (Generative AI) API Key
GOOGLE_API_KEY=AIzaSyDRFbqH7FwQQboC5fqA5PsjijtD87jyqvM

# 🔍 DuckDuckGo Image Search (via Custom Search Engine)
GOOGLE_CSE_API_KEY=AIzaSyCU0SW3lYfK5O5aLUWXXZI4wn6aKw-vhbo
GOOGLE_CSE_ID=86b149d69c3f34253

# 📷 Instagram Publishing (Meta Graph API)
ACCESS_TOKEN=EAAI49ie836QBOw1a1ckl9f41ATPEe7FkuH9lHexJY46WzkeJjSDTajP5v2DZCaZCxCM35FcKJV2Sa21TtAi983sbacVbL027PzwtSUK06CH4SXtz4cCZA5NLsFtRzHwyzbxWvrdcwoxp47AzGSYKs0XFbdtiQwgi0XsDU2oNt0URPnUOuEUlhcJoJ8pbC9y
IG_USER_ID=17841475595722393

# 🧠 Optional: OpenAI API Key (for alternate content generation)
OPENAI_API_KEY=your_openai_key_here
```

---

## 🧪 Setup Instructions

### 📦 1. Install dependencies

```bash
cd landing-app
npm install

cd ../app1-backend
pip install -r requirements.txt
```

### 🚀 2. Start Development

* Run Flask backend:

  ```bash
  python flask_app.py
  ```

* Run React landing app:

  ```bash
  npm run dev
  ```

* Visit: [http://localhost:5173](http://localhost:5173)

---

## 🌍 Deployment (Vercel)

1. Push `landing-app/` to GitHub
2. Go to [vercel.com](https://vercel.com) → Import GitHub repo
3. Add Vercel Environment Variables:

   * `VITE_CLERK_PUBLISHABLE_KEY`
   * `VITE_BACKEND_URL`
4. Framework: `Vite`
5. Deploy 🎉

---

## 👥 Team

* 👤 Chinar Mhatre
* 👤 Simran Warang
* 👤 Riya Divekar

📆 Internship: *9th June – 30th June 2025*
🏢 Org: *Digital Dojo Pvt. Ltd.*
🧑‍🏫 Mentor: *Mr. Sachin Sadare*

---

## 📜 License

MIT License – Free to use with attribution.

```

---

Let me know if you want a separate `README.md` for `app1-backend/` or for your `SA_STREAMLIT/` project!
```
