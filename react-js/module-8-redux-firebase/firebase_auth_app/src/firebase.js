// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyACthEdjrq6AP-cQJZhwQ8aV6OY0Pi7ktM",

  authDomain: "authappdemo-f32f4.firebaseapp.com",

  projectId: "authappdemo-f32f4",

  storageBucket: "authappdemo-f32f4.firebasestorage.app",

  messagingSenderId: "603500537746",

  appId: "1:603500537746:web:840b763aff2588296b834b",

  measurementId: "G-97W0NMG06J"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app