// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAth1Ftrj5LSlc3FTCkexdJc0nkCbB8Mww",
  authDomain: "react-dragon-news-auth-81782.firebaseapp.com",
  projectId: "react-dragon-news-auth-81782",
  storageBucket: "react-dragon-news-auth-81782.appspot.com",
  messagingSenderId: "331014525929",
  appId: "1:331014525929:web:8f57b19cf7f897e5b2b178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;