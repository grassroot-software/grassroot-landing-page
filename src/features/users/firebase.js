import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBI5l8a0OPKqRORHG6loSRH4cXpkkxQ4I",
    authDomain: "grassroot-landing-page.firebaseapp.com",
    projectId: "grassroot-landing-page",
    storageBucket: "grassroot-landing-page.appspot.com",
    messagingSenderId: "774747645727",
    appId: "1:774747645727:web:73e4e317b5aab4481ef22a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }