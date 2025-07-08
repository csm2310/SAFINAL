📊 Social Media Agent – Landing Platform

This repository hosts the Landing Platform for our AI-powered Instagram content creation and scheduling tools, developed during our internship at Digital Dojo Pvt. Ltd. in June 2025.

---

PROJECT OVERVIEW

This platform integrates two applications:

* CM Social Media Agent – A React + Flask-based Instagram Scheduler with AI captioning and auto-posting.
* SR Social Media Agent – A Streamlit-based Instagram Caption Generator using Gemini/OpenAI.

---

FOLDER STRUCTURE

SAFINAL/
├── landing-app/       -> Main dashboard with Clerk authentication
├── app1-frontend/     -> React frontend for App 1 (CM Instagram Scheduler)
├── app1-backend/      -> Flask backend for App 1 (Gemini/OpenAI + Meta Graph API)
├── SA\_STREAMLIT/      -> Streamlit app for App 2 (SR Instagram Caption Generator)

---

FEATURES

* AI-generated Instagram captions using Gemini or OpenAI
* Image fetching via Google CSE / DuckDuckGo
* Auto-posting and scheduled posting using Meta Graph API
* Interactive modern UI with Clerk authentication
* Deployed with Vercel (frontend) + local backend

---

ENVIRONMENT VARIABLES SETUP

In landing-app/.env:

VITE\_CLERK\_PUBLISHABLE\_KEY=your\_clerk\_publishable\_key\_here
VITE\_BACKEND\_URL=[http://localhost:5000](http://localhost:5000)

In app1-backend/.env:

GOOGLE\_API\_KEY=your\_google\_gemini\_api\_key
GOOGLE\_CSE\_API\_KEY=your\_google\_cse\_api\_key
GOOGLE\_CSE\_ID=your\_google\_cse\_id
ACCESS\_TOKEN=your\_instagram\_graph\_api\_access\_token
IG\_USER\_ID=your\_instagram\_user\_id
OPENAI\_API\_KEY=your\_openai\_api\_key

Note: Use the provided `.env.example` files and never commit real credentials.

---

HOW TO GET API KEYS

1. Google Gemini API Key:

   * Visit [https://makersuite.google.com/app](https://makersuite.google.com/app)
   * Go to Settings > API Key
   * Copy the key and set it as GOOGLE\_API\_KEY

2. Google Custom Search Engine (CSE):

   * Go to [https://programmablesearchengine.google.com/](https://programmablesearchengine.google.com/)
   * Create a new search engine with image search enabled
   * Use the CSE ID as GOOGLE\_CSE\_ID
   * Generate an API key from [https://console.cloud.google.com/](https://console.cloud.google.com/) and use it as GOOGLE\_CSE\_API\_KEY

3. Clerk Publishable Key:

   * Go to [https://clerk.dev](https://clerk.dev) and create a project
   * Copy the Frontend Publishable Key as VITE\_CLERK\_PUBLISHABLE\_KEY

4. Meta Graph API (Instagram):

   * Go to [https://developers.facebook.com/](https://developers.facebook.com/)
   * Create an app and connect an Instagram Business Account
   * Use Graph API Explorer to:

     * Get a long-lived access token → ACCESS\_TOKEN
     * Get your Instagram User ID → IG\_USER\_ID
   * Required permissions: instagram\_basic, pages\_read\_engagement, pages\_manage\_posts, instagram\_content\_publish

5. OpenAI API Key (Optional):

   * Go to [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
   * Generate and use the key as OPENAI\_API\_KEY

---

LOCAL DEVELOPMENT

1. Install dependencies

React frontend:
cd landing-app
npm install

Flask backend:
cd ../app1-backend
pip install -r requirements.txt

2. Run the applications

Backend:
cd app1-backend
python flask\_app.py

Frontend:
cd ../landing-app
npm run dev

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

DEPLOYMENT ON VERCEL

To deploy landing-app:

1. Push the landing-app folder to GitHub
2. Import into Vercel
3. Set environment variables:

   * VITE\_CLERK\_PUBLISHABLE\_KEY
   * VITE\_BACKEND\_URL
4. Framework: Vite
5. Build Command: npm run build
6. Output Directory: dist

---

TEAM

* Chinar Mhatre
* Simran Warang
* Riya Divekar

---

INTERNSHIP

Organization: Digital Dojo Pvt. Ltd.
Internship Period: 9th June 2025 – 30th June 2025
College: VCET, Computer Engineering Department

---

LICENSE

This project was developed as part of a student internship.
All rights reserved to the respective contributors and Digital Dojo Pvt. Ltd.

