// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVelKoMTuptgb4R9Xn3lD2j6zV8ifHXOI",
  authDomain: "classic-hotel-d04b4.firebaseapp.com",
  projectId: "classic-hotel-d04b4",
  storageBucket: "classic-hotel-d04b4.appspot.com",
  messagingSenderId: "397220727813",
  appId: "1:397220727813:web:14e5adf60c7c27cc6fa06c",
};
// console.log(import.meta.env.VITE_APIKEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
