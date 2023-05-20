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
    payement_aggrement
) {

    const _firstName = firstName
    const _lastName = lastName
    const _fullName = firstName + ' ' + lastName
    const _email = email
    const _phone_number = phone_number
    const _ageRange = ageRange
    const _gender = gender
    const _country = country
    const _preferred_course = preferred_course
    const _one_on_one_mentorship = one_on_one_mentorship
    const _payement_aggrement = payement_aggrement

    // Send data to firebase
    const sender = async (fullName) => {
        try {
            const q = query(collection(db, "users"), where("email", "==", email));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                await setDoc(doc(collection(db, "users"), fullName), {
                    email: _email,
                    firstName: _fullName,
                    lastName: _lastName,
                    email: _email,
                    phone_number: _phone_number ,
                    ageRange: _ageRange,
                    gender: _gender,
                    country: _country,
                    preferred_course: _preferred_course ,
                    one_on_one_mentorship: _one_on_one_mentorship,
                    payement_aggrement: _payement_aggrement,
                });
                window.location.href = `/welcome?${firstName}`
            } else {
                window.location.href = `/register_error?${firstName}`
            }
        } catch (error) {
            console.log(error);
        }
    }; sender(_fullName);
}

export default sendUserInfos