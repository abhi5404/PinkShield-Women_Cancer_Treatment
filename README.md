## PinkShield

<p align="center">
  <img src="https://img.icons8.com/?size=200&id=CD5k7Z3VAbLw&format=png&color=FF2D55" alt="PinkShield Logo" height="96" />
</p>

### Modern breast-health companion app built with React, TypeScript, Firebase, and Tailwind CSS

- **Prototype notice**: This is an active prototype in the building phase. You may encounter crashes or unfinished features.
- **If login or signup doesn’t work**: Use the test credentials below to explore the app.
  - **Email**: `sportifyenglish@gmail.com`
  - **Password**: `Abhi@2004`

---

## Tech stack

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

## Features

- **Authentication**: Email/password signup and login with Firebase Auth
- **Dashboard**: Personalized overview after login
- **AI Chat**: Conversational support interface for guidance and FAQs
- **Health Tracker**: Log symptoms, severities, and notes over time
- **Community**: Space for posts and discussions
- **Modern UI**: Tailwind CSS, animations with Framer Motion, icons via Lucide

---

## Project structure

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
      environment.ts            # Firebase env config (pre-configured)
    lib/
      firebase.ts               # Firebase initialization (Auth, Firestore, Analytics)
    hooks/
      useAuth.ts                # Auth hook (signIn/signUp)
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

## Getting started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production build
```bash
npm run build
npm run preview
```

---

## Authentication notes

- Normal signup/login uses Firebase Authentication.
- If login or signup fails in this prototype, use the test account:
  - **Email**: `sportifyenglish@gmail.com`
  - **Password**: `Abhi@2004`

> Accounts and data may be periodically reset during development.

---

## Firebase configuration

- Firebase is already configured in `src/config/environment.ts` and initialized in `src/lib/firebase.ts`.
- See `FIREBASE_SETUP.md` for details about services and collections.

---

## Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

---

## Roadmap

- Appointments module
- Support resources hub
- Additional analytics and QA hardening

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## Acknowledgements

- Built by `abhi5404` with ❤️ using React, TypeScript, Firebase, and Tailwind CSS.
- Logo displayed above is a placeholder. To use a custom brand mark, replace it with your own and/or add an image at `assets/pinkshield-logo.png` and reference it here.


