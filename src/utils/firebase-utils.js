// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1AwLorZC_ipZQeXqxednx6Efi4jGgU6g",
  authDomain: "diurnarius-78610.firebaseapp.com",
  projectId: "diurnarius-78610",
  storageBucket: "diurnarius-78610.appspot.com",
  messagingSenderId: "834710124913",
  appId: "1:834710124913:web:532fa8ba450880a2ee9ed0",
  measurementId: "G-2QFCRS8ZSD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
