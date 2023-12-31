// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHRNuCzyi6yZfhDjWktB2x6WS_J8qyWCc",
  authDomain: "gpacal-b1b12.firebaseapp.com",
  projectId: "gpacal-b1b12",
  storageBucket: "gpacal-b1b12.appspot.com",
  messagingSenderId: "133145250154",
  appId: "1:133145250154:web:45c5a0c1f6999b40a83d13",
  measurementId: "G-C2TH5FK71J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);