// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHxviLELWD-xCkyOKg9KG2vgva5pgSZmc",
  authDomain: "lab-projet-final.firebaseapp.com",
  projectId: "lab-projet-final",
  storageBucket: "lab-projet-final.firebasestorage.app",
  messagingSenderId: "676802707521",
  appId: "1:676802707521:web:b2d953ee150ac20ab506c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)