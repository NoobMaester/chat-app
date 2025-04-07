// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZgKQMMmk9sqt8wqLUSQocnW36PYxWr74",
  authDomain: "blip-f78b7.firebaseapp.com",
  databaseURL: "https://blip-f78b7-default-rtdb.firebaseio.com",
  projectId: "blip-f78b7",
  storageBucket: "blip-f78b7.firebasestorage.app",
  messagingSenderId: "966306162947",
  appId: "1:966306162947:web:929f5e4107dc5232c7e136",
  measurementId: "G-2QYNS01THH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);