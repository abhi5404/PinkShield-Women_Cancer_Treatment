## PinkShield – Women’s Cancer Care Navigator

<p align="center">
  <img src="assets/pinkshield-logo.png" alt="PinkShield Logo" height="120" />
</p>

<div align="center">

<a href="https://github.com/abhi5404/PinkShield-Women_Cancer_Treatment"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-Repository-111?logo=github&style=for-the-badge" /></a>
<img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=fff&style=for-the-badge" />
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff&style=for-the-badge" />
<img alt="Firebase" src="https://img.shields.io/badge/Firebase-12-FFCA28?logo=firebase&logoColor=000&style=for-the-badge" />

<br/>

<a href="https://project-eta-tawny.vercel.app"><b>▶ Live Demo</b></a> · <a href="#-quickstart">Quickstart</a> · <a href="#-features">Features</a> · <a href="#-architecture">Architecture</a>

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
- Architecture
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

---

## 🏗 Architecture

```mermaid
graph LR
  A[React + TypeScript (Vite)] --> B[UI Modules]
  B --> C[Firebase Auth]
  B --> D[Firestore]
  B --> E[Analytics]
  B --> F[Google Maps APIs]
```

---

## 📂 Project Structure

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
