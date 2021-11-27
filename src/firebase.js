import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default getFirestore();

export function signup(email, password) {
  //authentication handle needs to be provided as a first of arguments
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  //authentication handle needs to be provided as a first of arguments
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

//custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
