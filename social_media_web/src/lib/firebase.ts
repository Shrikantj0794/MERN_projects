// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1lK0XiY3LP-h62f_Aajmm9OIkBDDrYIw",
  authDomain: "social-media-442bd.firebaseapp.com",
  projectId: "social-media-442bd",
  storageBucket: "social-media-442bd.appspot.com",
  messagingSenderId: "777087635617",
  appId: "1:777087635617:web:584e6491dc8ac9b6f8e0e0",
  measurementId: "G-E7P4H3HWTQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const bucket = getStorage(app)