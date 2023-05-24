import { collection, doc, setDoc } from "firebase/firestore";
import { db } from '../firebase'

function sendUserInfos(
    firstName,
    lastName,
    email,
    phone_number,
    preferred_course,
    one_on_one_mentorship,
    docs_from_firebase
) {
    const fullName = firstName + ' ' + lastName

    // Send data to firebase
    const sender = async (fullName) => {
        try {            
            if (docs_from_firebase.docs.length === 0) {
                await setDoc(doc(collection(db, "users"), fullName + ' [' + email + ']'), {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    phone_number: phone_number,
                    preferred_course: preferred_course,
                    one_on_one_mentorship: one_on_one_mentorship,
                });
                // Switcher
                window.location.href = `/payment`
            } else {
                window.location.href = `/register_error?${firstName}`
            }
        } catch (error) {
            console.log(error);
        }
    }; sender(fullName);
}

export { db, sendUserInfos };