// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { environment } from "../config/environment";

// Initialize Firebase
export const app = initializeApp(environment.firebase);
// Initialize Analytics only in supported browser environments
export let analytics: Analytics | null = null;
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    // Analytics may not be available in some environments (e.g., unsupported browsers)
    analytics = null;
  }
}
export const auth = getAuth(app);
export const db = getFirestore(app);

// Database types for TypeScript
export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  date_of_birth: string | null;
  phone: string | null;
  emergency_contact: string | null;
  medical_history: string | null;
  created_at: string;
  updated_at: string;
}

export interface SymptomLog {
  id: string;
  user_id: string;
  symptoms: string[];
  severity: number;
  notes: string | null;
  ai_response: string | null;
  created_at: string;
}

export interface Appointment {
  id: string;
  user_id: string;
  doctor_name: string;
  appointment_type: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes: string | null;
  created_at: string;
}

export interface CommunityPost {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  created_at: string;
}
