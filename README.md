<p align="center">
  <img src="https://img.icons8.com/?size=200&id=CD5k7Z3VAbLw&format=png&color=FF2D55" alt="PinkShield Logo" height="110" />
</p>

<div align="center">

<h2>PinkShield – Women’s Cancer Care Navigator</h2>

<a href="https://github.com/abhi5404/PinkShield-Women_Cancer_Treatment"><img alt="Repo" src="https://img.shields.io/badge/GitHub-abhi5404%2FPinkShield--Women__Cancer__Treatment-111?logo=github" /></a>
<img alt="Built with Vite" src="https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite&logoColor=fff" />
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff" />
<img alt="Firebase" src="https://img.shields.io/badge/Firebase-12-ffca28?logo=firebase&logoColor=000" />

<br/>

<a href="https://project-eta-tawny.vercel.app"><b>▶ Live Demo</b></a> · <a href="#-quickstart">Quickstart</a> · <a href="#-features">Features</a> · <a href="#-architecture">Architecture</a>

</div>

<hr/>

### Why PinkShield?

PinkShield is a women-first cancer care companion that blends AI guidance, crisis navigation, and community support into a single seamless journey.

> Family Risk → Prevention → Symptom Diary → AI Pathway → Ambulance (Maps) → Hospital → Treatment → Chemo Rehab → Recovery & Community

> Prototype notice: This project is in active development. You may encounter crashes or unfinished features.

> If login or signup doesn’t work, use:
> - Email: `sportifyenglish@gmail.com`
> - Password: `Abhi@2004`

---

## 📚 Table of Contents

1. Overview
2. Features
3. Architecture
4. Project Structure
5. Quickstart
6. Tech Stack
7. Security & Privacy
8. Roadmap
9. Contributing
10. License

---

## 🧭 Overview

PinkShield guides patients and families from early awareness to recovery: prevention nudges, AI symptom triage, hospital/ambulance navigation with Maps, and supportive community tools.

---

## ✨ Features

- Patient & Family: prevention nudges, symptom diary with AI alerts, caregiver dashboard
- Emergency & Rehab: live ambulance tracking, SOS dispatch, hospital finder, rehab locator
- AI Engines: emergency triage, bed/resource predictor, pathway and report simplifier
- Modern UX: Tailwind design system, micro-animations, accessible components

---

## 🏗 Architecture

```mermaid
flowchart LR
  A[React + TS (Vite)] -- Router/Forms/State --> B[UI Modules]
  B --> C[Firebase Auth]
  B --> D[Firestore]
  B --> E[Analytics]
  B --> F[Maps SDK / APIs]
  D -->|Realtime/Queries| B
  C -->|JWT Session| B
```

---

## 📂 Project Structure

```text
project/
  ENVIRONMENT_SETUP.md
  FIREBASE_SETUP.md
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  tsconfig*.json
  vite.config.ts
  src/
    App.tsx
    main.tsx
    index.css
    config/
      environment.ts
    lib/
      firebase.ts
    hooks/
      useAuth.ts
    components/
      Layout.tsx
      ProtectedRoute.tsx
    pages/
      LandingPage.tsx
      Auth.tsx
      Dashboard.tsx
      AIChat.tsx
      HealthTracker.tsx
      Community.tsx
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
