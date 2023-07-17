// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqexi-B1A5A9GHGFTPr4AwADZtnBVsZrM",
  authDomain: "valuex-85846.firebaseapp.com",
  projectId: "valuex-85846",
  storageBucket: "valuex-85846.appspot.com",
  messagingSenderId: "205786152193",
  appId: "1:205786152193:web:80025d609ea91e66ed2f00",
  measurementId: "G-W1HCE4XFJG",
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

export default firebase_app;
