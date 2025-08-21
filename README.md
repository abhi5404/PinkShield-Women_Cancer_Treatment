# 🌸 PinkShield – Women’s Cancer Care Navigator  
**GenAI DxPath 2.0 Prototype**  

Empowering women’s cancer care through **AI navigation, Google Maps integration, and supportive community tools**.  

---

## 📖 Executive Summary  
PinkShield is a **women-focused cancer care platform** guiding patients and families across the entire journey:  

- Risk awareness & prevention  
- Symptom logging & diary  
- Diagnostic pathway suggestions  
- AI-powered triage & hospital recommendations  
- Live ambulance tracking with Google Maps  
- Post-chemo rehab & recovery support  

---

## 👥 Who Uses It?  
- Patients & Families  
- Hospitals & Doctors  
- NGOs & Insurers  
- Researchers & Policy Makers  

---

## 🚀 What’s New in 2.0  
- Stronger, fewer AI engines (multi-solution design)  
- Ambulance & Rehab suite powered by **Google Maps APIs**  
- Clearer patient navigation → earlier diagnosis & lower costs  

---

## ⚠️ Prototype Login Info  
If **login/signup does not work**, use the test account:  

- **Email:** `sportifyenglish@gmail.com`  
- **Password:** `Abhi@2004`  

*(This is a prototype in the building phase, so authentication may occasionally fail.)*  

---

## 🩺 The Problem  
- **Late Diagnosis** → Vague symptoms & complex medical language  
- **Fragmented Care** → Patients juggle multiple hospitals & records  
- **Emergency Delays** → Uncertainty in ambulance arrival & right hospital choice  
- **Weak Recovery Support** → Diet, rehab & mental health often missing  

---

## 💡 The Solution  
A **single cancer care navigator** for women:  

`Family Risk → Prevention → Symptom Diary → AI Pathway → Ambulance (Maps) → Hospital → Treatment → Chemo Rehab (Maps) → Recovery & Community`  

---

## ✨ Core Features  

### 👩‍⚕️ Patient & Family  
- Family Tree Cancer Risk (BRCA/Lynch detection)  
- Prevention & Early Signs (Pap smear, HPV, mammogram reminders)  
- Symptom & Side-Effect Diary with AI alerts  
- Insurance & Financial Support (Govt. schemes, NGO help)  
- Community & Mental Health (groups, mentors, mindfulness modules)  
- AI Treatment Coach (explains biopsy/chemo in simple language)  
- Clinical Trial Finder (local/global trial listings)  
- Digital Twin Health Record (shareable reports & scans)  
- Voice & Local Language Support  
- Caregiver Dashboard (appointments, meds, progress tracking)  

---

### 🚑 Emergency & Rehab Suite (Maps-Based)  
- **Ambulance Live Tracking** – Google Maps ETA & turn-by-turn routing  
- **SOS Dispatch** – Nearest ambulance auto-assigned with tracking link  
- **Hospital Finder** – Nearest hospitals + directions + ETA  
- **Rehab & Chemo Centre Locator** – Filtered by govt./private/NGO  

---

### 🤖 AI Engines  
1. **AI Emergency Triage** → Classifies urgency (Critical / Moderate / Mild)  
2. **AI Bed & Resource Predictor** → Predicts ICU/bed availability  
3. **AI Diagnostic Pathway & Report Simplifier** → Suggests next tests & explains jargon  

---

## 🏗️ Tech Stack  

### Frontend  
- React + TypeScript (Vite)  
- TailwindCSS  
- React Native (planned for mobile)  
- Google Maps SDK  

### Backend  
- Node.js / Express (or Firebase Functions)  
- REST / GraphQL APIs  
- Role-based access control  

### Database & Integrations  
- Firestore (patients, diaries, appointments)  
- Firebase Realtime DB (ambulance tracking)  
- Firebase Storage (reports & scans)  
- Google Maps API (Directions, Places)  
- Telehealth APIs (Jitsi/Zoom)  
- FCM Notifications  

---

## 📂 Project Structure  

```bash
src/
│
├── components/
│   ├── Layout.tsx
│   └── ProtectedRoute.tsx
│
├── config/
│   └── environment.ts
│
├── hooks/
│   └── useAuth.ts
│
├── lib/
│   └── firebase.ts
│
├── pages/
│   ├── AIChat.tsx
│   ├── Auth.tsx
│   ├── Community.tsx
│   ├── Dashboard.tsx
│   ├── HealthTracker.tsx
│   └── LandingPage.tsx
│
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts

Other files:
.env.example  
FIREBASE_SETUP.md  
ENVIRONMENT_SETUP.md  
package.json  
tailwind.config.js  
vite.config.ts

⚙️ Setup & Installation

Clone repo

git clone (https://github.com/abhi5404/PinkShield-Women_Cancer_Treatment)
cd pinkshield


Install dependencies

npm install


Configure Firebase

Copy .env.example → .env

Add Firebase keys (see FIREBASE_SETUP.md)

Run locally

npm run dev


Login Prototype
If auth fails → use test credentials above.

🔒 Privacy, Consent & Safety

Explicit patient consent before storing medical data

Encryption at rest & transit

Role-based access control (patient / caregiver / doctor / admin)

De-identified data for research

Disclaimer: AI assists, doctors decide; emergency numbers always visible

📌 Roadmap

 Expand AI triage & pathway engines

 Predictive relapse monitoring

 Native Android/iOS app

 Offline rural mode

🤝 Contributing

We welcome contributions from developers, NGOs, and healthcare experts.

Fork the repo

Create a feature branch

Submit a PR

📜 License

MIT License – free to use with attribution.
