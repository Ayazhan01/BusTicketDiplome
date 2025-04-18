import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAlt0tJGPtWLPo-EipSacGdYPMOpL6puo",
  authDomain: "auth-demo-2c8f3.firebaseapp.com",
  projectId: "auth-demo-2c8f3",
  storageBucket: "auth-demo-2c8f3.firebasestorage.app",
  messagingSenderId: "1044205250302",
  appId: "1:1044205250302:web:b91b4a9415323ff7e5a7af"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);