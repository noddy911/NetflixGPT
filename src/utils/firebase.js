// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbvoj8GuhZe7RSMYenbGDjPxgVYYNUJYw",
  authDomain: "netflixgpt-17e7d.firebaseapp.com",
  projectId: "netflixgpt-17e7d",
  storageBucket: "netflixgpt-17e7d.firebasestorage.app",
  messagingSenderId: "1008325371365",
  appId: "1:1008325371365:web:7e15fdd2bf643b7bcbbb0c",
  measurementId: "G-X6KXSHW33X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
