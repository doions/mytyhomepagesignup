// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7LXGBWa5r6Y5MaCAqUBxUB90VpyKjtGA",
    authDomain: "heartfulness-jabalpur.firebaseapp.com",
    databaseURL: "https://heartfulness-jabalpur-default-rtdb.firebaseio.com",
    projectId: "heartfulness-jabalpur",
    storageBucket: "heartfulness-jabalpur.firebasestorage.app",
    messagingSenderId: "985711684846",
    appId: "1:985711684846:web:66e6c86e0316a62f56d7ff",
    measurementId: "G-HS1E3XF25V"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(app);
//console.log(database);


