// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcWson8O2zHXCtnGNzYDBh5Vlia22Y4Bc",
  authDomain: "dirarinternational-1c63e.firebaseapp.com",
  projectId: "dirarinternational-1c63e",
  storageBucket: "dirarinternational-1c63e.firebasestorage.app",
  messagingSenderId: "974228953619",
  appId: "1:974228953619:web:17567aade68de7d3627de6",
  measurementId: "G-GCZGEQ1H35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);