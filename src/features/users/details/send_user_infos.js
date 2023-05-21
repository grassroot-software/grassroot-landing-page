import { getFirestore, query, getDocs, collection, where, doc, setDoc } from "firebase/firestore";

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

function sendUserInfos(
    firstName,
    lastName,
    email,
    phone_number,
    ageRange,
    gender,
    country,
    preferred_course,
    one_on_one_mentorship,
) {

    const fullName = firstName + ' ' + lastName

    // Send data to firebase
    const sender = async (fullName) => {
        try {
            const q = query(collection(db, "users"), where("email", "==", email));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                await setDoc(doc(collection(db, "users"), fullName + ' [' + email + ']'), {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    phone_number: phone_number,
                    ageRange: ageRange,
                    gender: gender,
                    country: country,
                    preferred_course: preferred_course,
                    one_on_one_mentorship: one_on_one_mentorship,
                });
                // Switcher
                switch (one_on_one_mentorship) {
                    case "Yes":
                        window.location.href = `/welcome_pro?${fullName}`
                        break
                    case "No":
                        window.location.href = `/welcome?${fullName}`
                        break
                    default:
                        window.location.href = `/signup`
                }
            } else {
                window.location.href = `/register_error?${firstName}`
            }
        } catch (error) {
            console.log(error);
        }
    }; sender(fullName)


}

export default sendUserInfos