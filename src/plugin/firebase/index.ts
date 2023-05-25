// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtdlR7rCoTo8FmqNj7VvoIJp_f6g9deKA",
  authDomain: "its-show-time-ff193.firebaseapp.com",
  projectId: "its-show-time-ff193",
  storageBucket: "its-show-time-ff193.appspot.com",
  messagingSenderId: "707753472537",
  appId: "1:707753472537:web:bfc2830249fa081f333088",
  measurementId: "G-JEKKE46LTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
