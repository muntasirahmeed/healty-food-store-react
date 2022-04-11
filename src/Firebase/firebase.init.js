// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL0aNUp22NTv53Mbf30_Q6_CAU3AJSF6E",
  authDomain: "healthy-food-store-58a51.firebaseapp.com",
  projectId: "healthy-food-store-58a51",
  storageBucket: "healthy-food-store-58a51.appspot.com",
  messagingSenderId: "446060652535",
  appId: "1:446060652535:web:7f2fd25539364265f770f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
