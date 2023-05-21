import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuCrWXvg1EAgstqvJ7fM-_gW5UWlUJywU",
    authDomain: "grassroot-55632.firebaseapp.com",
    projectId: "grassroot-55632",
    storageBucket: "grassroot-55632.appspot.com",
    messagingSenderId: "879754475437",
    appId: "1:879754475437:web:6437151e6edb021f9c5324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }