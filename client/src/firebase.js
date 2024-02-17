// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-rent-94a4e.firebaseapp.com",
  projectId: "car-rent-94a4e",
  storageBucket: "car-rent-94a4e.appspot.com",
  messagingSenderId: "603525968060",
  appId: "1:603525968060:web:3299c5a34391de31eae0b9",
  measurementId: "G-G8S215R7RF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
