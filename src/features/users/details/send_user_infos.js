import { collection, doc, setDoc } from "firebase/firestore";
import { db } from '../firebase'
import emailjs from 'emailjs-com';

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
                
                       // Send mail here
      var templateParams = {        
      email: email
    };
      emailjs.send('service_0mcfmwp', 'template_9lsiwyp', templateParams,'s0FLFeKbLc9PuH-nc')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });  

                
                // Switcher
                 switch (one_on_one_mentorship) {
                    case "Yes":
                        window.location.href = `/payment`
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
    }; sender(fullName);
}

export { db, sendUserInfos };
