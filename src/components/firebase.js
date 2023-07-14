// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBemyppIsNOR9Y-Tgm2ERA1zRi9L2BfFXg",
  authDomain: "ecommerce-35eed.firebaseapp.com",
  projectId: "ecommerce-35eed",
  storageBucket: "ecommerce-35eed.appspot.com",
  messagingSenderId: "500075754027",
  appId: "1:500075754027:web:f33607788cf362f5af706e",
  measurementId: "G-EDVF1DEHP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const userRef=collection(db, "users");