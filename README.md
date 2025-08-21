## PinkShield – Women’s Cancer Care Navigator

<p align="center">
  <svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ps" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF2D55"/>
        <stop offset="100%" stop-color="#8B5CF6"/>
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="120" height="120" rx="28" fill="url(#ps)"/>
    <path d="M70 45c10 7 18 9 25 10v20c0 14-9 25-25 30c-16-5-25-16-25-30V55c7-1 15-3 25-10z" fill="none" stroke="#0B0B0B" stroke-width="6" stroke-linejoin="round"/>
  </svg>
</p>

<div align="center">

<a href="https://github.com/abhi5404/PinkShield-Women_Cancer_Treatment"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-Repository-111?logo=github&style=for-the-badge" /></a>
<img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=fff&style=for-the-badge" />
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff&style=for-the-badge" />
<img alt="Firebase" src="https://img.shields.io/badge/Firebase-12-FFCA28?logo=firebase&logoColor=000&style=for-the-badge" />
<img alt="Stars" src="https://img.shields.io/github/stars/abhi5404/PinkShield-Women_Cancer_Treatment?style=for-the-badge" />
<img alt="Issues" src="https://img.shields.io/github/issues/abhi5404/PinkShield-Women_Cancer_Treatment?style=for-the-badge" />
<img alt="Last Commit" src="https://img.shields.io/github/last-commit/abhi5404/PinkShield-Women_Cancer_Treatment?style=for-the-badge" />

<br/>

<a href="https://pink-shield-women-cancer-treatment.vercel.app/"><b>▶ Live Demo</b></a> · <a href="#-quickstart">Quickstart</a> · <a href="#-features">Features</a>

</div>

---

### Prototype notice
- This is an active prototype. Some features may be unstable.
- If login/signup fails, use the test account:
  - Email: `sportifyenglish@gmail.com`
  - Password: `Abhi@2004`

---

## 📚 Table of Contents
- Overview
- Features
- Project Structure
- Quickstart
- Tech Stack
- Security & Privacy
- Roadmap
- Contributing
- License

---

## 🧭 Overview
PinkShield is a women-first cancer care companion blending AI guidance, crisis navigation, and community support into a single seamless journey.

> Family Risk → Prevention → Symptom Diary → AI Pathway → Ambulance (Maps) → Hospital → Treatment → Chemo Rehab → Recovery & Community

---

## ✨ Features
- Patient & Family: prevention nudges, symptom diary with AI alerts, caregiver dashboard
- Emergency & Rehab: live ambulance tracking, SOS dispatch, hospital finder, rehab locator
- AI Engines: emergency triage, bed/resource predictor, pathway and report simplifier
- Modern UX: Tailwind design system, micro-animations, accessible components

<details>
  <summary><b>Feature deep dive</b></summary>

  - Mammogram/HPV/Pap reminders with friendly nudges
  - Symptom diary with severity trends and insights
  - AI report simplifier and triage guidance
  - Google Maps powered hospital finder and ETA
  - Community posts, reactions, and supportive tips

</details>

---

 

## 📂 Project Structure

<details open>
  <summary><b>Folders and key files</b></summary>

```text
📦 project/
├─ 🧭 ENVIRONMENT_SETUP.md
├─ 🔥 FIREBASE_SETUP.md
├─ 🧱 index.html
├─ 📦 package.json
├─ 🎨 tailwind.config.js
├─ ⚙️ vite.config.ts
├─ 🧑‍💻 tsconfig*.json
└─ 📁 src/
   ├─ 🚪 App.tsx                      # Router + root composition
   ├─ 🚀 main.tsx                     # App bootstrap (Vite entry)
   ├─ 🎯 index.css                    # Global styles (Tailwind)
   ├─ 🧩 components/                 # Reusable UI primitives
   │  ├─ Layout.tsx
   │  └─ ProtectedRoute.tsx
   ├─ 🛠 hooks/                       # App-level hooks
   │  └─ useAuth.ts
   ├─ ⚙️ config/                      # Static configuration
   │  └─ environment.ts
   ├─ 🔌 lib/                         # Integrations & SDK setup
   │  └─ firebase.ts                 # Auth, Firestore, Analytics
   └─ 📚 pages/                      # Route pages
      ├─ LandingPage.tsx
      ├─ Auth.tsx
      ├─ Dashboard.tsx
      ├─ AIChat.tsx
      ├─ HealthTracker.tsx
      └─ Community.tsx
```

</details>

---

## ⚡ Quickstart

### Clone
```bash
git clone https://github.com/abhi5404/PinkShield-Women_Cancer_Treatment.git
cd PinkShield-Women_Cancer_Treatment
```

### Install & Run
```bash
npm install
npm run dev
```

### Build & Preview
```bash
npm run build
npm run preview
```

---

## 🧰 Tech Stack

<p>
  <img alt="React" src="https://img.shields.io/badge/React-18-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-12-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img alt="React Router" src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img alt="React Hook Form" src="https://img.shields.io/badge/React_Hook_Form-7-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" />
  <img alt="Zod" src="https://img.shields.io/badge/Zod-4-3E67B1?style=for-the-badge" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
  <img alt="Recharts" src="https://img.shields.io/badge/Recharts-3-22D3EE?style=for-the-badge" />
  <img alt="date-fns" src="https://img.shields.io/badge/date--fns-4-00897B?style=for-the-badge" />
  <img alt="react-hot-toast" src="https://img.shields.io/badge/react--hot--toast-2-FF6B6B?style=for-the-badge" />
  <img alt="Lucide" src="https://img.shields.io/badge/Lucide-0.344-111?style=for-the-badge" />
</p>

---

## 🔐 Security & Privacy
- Explicit consent before storing medical data
- Encryption at rest and in transit
- Role-based access control (patient, caregiver, doctor, admin)
- De-identified data for research (where applicable)

---

## 🗺 Roadmap
- [ ] Appointments module
- [ ] Support resources hub
- [ ] Additional analytics and QA hardening
- [ ] Expand AI triage and pathway engines
- [ ] Native Android/iOS app
- [ ] Offline rural mode

---

## 🤝 Contributing
Contributions are welcome! Fork the repo, create a feature branch, and submit a PR.

---

## 📄 License
MIT License – free to use with attribution. 
