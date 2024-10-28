// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCetKrFhbDJuZlmozVYRqBg1611fVuLkuY",
  authDomain: "geofence-63dfd.firebaseapp.com",
  projectId: "geofence-63dfd",
  storageBucket: "geofence-63dfd.appspot.com",
  messagingSenderId: "103260036896",
  appId: "1:103260036896:web:438eed60a14407c7f18145",
  measurementId: "G-0WNLEJJDN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);