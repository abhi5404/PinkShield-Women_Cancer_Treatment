🌸 PinkShield – Women’s Cancer Care Navigator

Empowering women’s cancer care through AI, maps, and community support.

PinkShield is a women-focused cancer care platform that guides patients and families across the entire journey – from risk awareness and symptom logging to diagnosis, treatment, emergency ambulance dispatch, and post-chemo rehab.

The project combines:

🚑 Google Maps APIs → Ambulance live tracking & rehab locator

🧠 Three powerful AI engines → Triage, hospital resource prediction, and diagnostic pathway generation

💙 Supportive ecosystem → Family dashboards, insurance help, community groups, and mental health support

⚠️ Prototype Note: As this project is in active development, login/signup may fail. In such cases, use this demo account:

Email: sportifyenglish@gmail.com

Password: Abhi@2004

✨ Executive Summary

Who uses it? Patients & families, hospitals, NGOs, insurers, researchers

What’s new? Stronger, fewer AI engines + Maps-based ambulance & rehab suite

Why it matters? Earlier diagnosis, faster emergency response, smoother recovery, and lower costs

MVP Focus: Patient app + Maps tracking + Triage AI + Hospital dashboard

🚨 The Problem

Late diagnosis due to vague symptoms and complex medical language

Fragmented care across hospitals, labs, and records

Emergency delays in ambulance arrival & hospital selection

Weak post-treatment support (diet, mental health, structured rehab)

💡 The Solution

A single cancer care navigator for women:
Risk → Prevention → Symptom diary → Diagnosis → Ambulance (Maps) → Hospital → Treatment → Chemo rehab (Maps) → Recovery & community

🧩 Core Features
👩‍⚕️ Patient & Family

Family Tree Cancer Risk – Detects inherited patterns (BRCA/Lynch)

Prevention & Early Signs – Lifestyle tips, reminders for Pap smear/mammogram/HPV vaccine

Symptom & Side-Effect Diary – Logs with AI alerts

Money & Insurance Help – Govt. schemes, NGO support, insurance claims

Community & Mental Health – Anonymous groups, mentors, CBT & mindfulness

AI Treatment Coach – Explains biopsy/surgery/chemo in plain language

Clinical Trial Finder – Local/global trial listings

Digital Twin Health Record – Shareable medical file to avoid duplicate tests

Voice & Local Language – Regional language support with voice input/output

Caregiver Dashboard – Family tracks meds, appointments, progress

🚑 Maps-Based Emergency & Rehab (Non-AI)

Ambulance Live Tracking – Google Maps with ETA & route

SOS & Dispatch – One-click ambulance assignment & family tracking link

Nearest Hospital Finder – Closest hospital + bed availability prediction

Rehab & Chemo Centre Locator – Filters for govt./private/NGO centres

🤖 Stronger, Fewer AI Engines

AI Emergency Triage – Classifies urgency (Critical / Moderate / Mild)

AI Hospital Bed Predictor – Predicts bed/ICU availability from hospital feeds

AI Diagnostic Pathway & Report Simplifier – Suggests next tests & explains results

🏗️ Tech Stack
Frontend

⚛️ React + TypeScript (Vite)

📱 React Native (mobile – planned)

🎨 TailwindCSS

🌐 Google Maps SDK

🔒 Secure Auth + Multilingual UI

Backend

🟩 Node.js / Express (or Firebase Functions)

🔗 REST / GraphQL APIs

🔑 Role-based access control

Databases & Integrations

📂 Firestore (patients, diaries, appointments)

📡 Realtime DB (ambulance location)

🗂️ Firebase Storage (reports, scans)

📍 Google Maps (Directions / Places)

🔔 FCM Notifications

📹 Telehealth APIs (Jitsi/Zoom)

💳 Payments (optional)

📂 Project Structure
src/
├── components/
│   ├── Layout.tsx
│   └── ProtectedRoute.tsx
├── config/
│   └── environment.ts
├── hooks/
│   └── useAuth.ts
├── lib/
│   └── firebase.ts
├── pages/
│   ├── AIChat.tsx
│   ├── Auth.tsx
│   ├── Community.tsx
│   ├── Dashboard.tsx
│   ├── HealthTracker.tsx
│   ├── LandingPage.tsx
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
.env.example
.gitignore
ENVIRONMENT_SETUP.md
FIREBASE_SETUP.md
eslint.config.js
index.html
package.json
postcss.config.js
tailwind.config.js
tsconfig.json
vite.config.ts

⚙️ Setup & Installation

Clone repo

git clone https://github.com/abhi5404/pinkshield.git
cd pinkshield


Install dependencies

npm install


Configure Firebase

Copy .env.example → .env

Add your Firebase project keys (see FIREBASE_SETUP.md)

Run locally

npm run dev


Login Prototype

If signup/login fails, use:

Email: sportifyenglish@gmail.com

Password: Abhi@2004

🔒 Privacy, Consent & Safety

✅ Explicit consent before storing medical data

🔐 Encrypted at rest & transit

👩‍⚕️ Role-based access (patient, caregiver, doctor, admin)

🧾 De-identified data for research

⚠️ Disclaimer: AI assists, doctors decide. Emergency numbers always visible.

📌 Roadmap

 Expand AI triage engine

 Add predictive analytics for relapse monitoring

 Native Android/iOS app

 Offline mode for rural areas

🤝 Contributing

We welcome contributions from developers, researchers, NGOs, and healthcare professionals. Please open an issue or PR to discuss changes.

📜 License

MIT License – free to use and modify with attribution.
