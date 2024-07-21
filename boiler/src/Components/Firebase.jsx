// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7solHFoGsy4_XPmn44kTxozjCSb0Ket8",
  authDomain: "task1-6f032.firebaseapp.com",
  projectId: "task1-6f032",
  storageBucket: "task1-6f032.appspot.com",
  messagingSenderId: "199617951990",
  appId: "1:199617951990:web:1999c1c0f19417e471d4d7",
  measurementId: "G-K8W1645PJD"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);