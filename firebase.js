// Import the functions you need from the SDKs you need
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5nKQijd4WmDb8t52ucJVCpLsgOGT5pU0",
  authDomain: "alcariadb.firebaseapp.com",
  projectId: "alcariadb",
  storageBucket: "alcariadb.firebasestorage.app",
  messagingSenderId: "874337336496",
  appId: "1:874337336496:web:d93295d1001e787984cf75",
  measurementId: "G-S237BT83KN"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);