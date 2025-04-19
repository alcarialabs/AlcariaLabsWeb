// Import the functions you need from the SDKs you need
// Importa las funciones necesarias
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMyzycM4cSu8pXqg651gorLKxDhp1xCxI",
  authDomain: "alcarialabs-c10d6.firebaseapp.com",
  projectId: "alcarialabs-c10d6",
  storageBucket: "alcarialabs-c10d6.firebasestorage.app",
  messagingSenderId: "148824835816",
  appId: "1:148824835816:web:82aaf714822a5adedbab5d",
  measurementId: "G-HR6XFN7L83",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  getAnalytics(app);
}

// Inicializa Firestore y expórtalo
export const db = getFirestore(app);
