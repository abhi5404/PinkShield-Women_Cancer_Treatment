import { useState, useEffect } from 'react';
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      // Create user with email and password
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update display name and send verification email
      try {
        await updateProfile(user, { displayName: fullName });
        await sendEmailVerification(user);
      } catch (err) {
        // Non-fatal if profile update or verification fails
      }

      // Create user profile in Firestore
      await setDoc(doc(db, 'profiles', user.uid), {
        id: user.uid,
        email: user.email,
        full_name: fullName,
        avatar_url: null,
        date_of_birth: null,
        phone: null,
        emergency_contact: null,
        medical_history: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return {
    user,
    loading,
    signUp,
    signIn,
    signOut: signOutUser,
  };
}