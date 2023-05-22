import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { useState } from 'react';
import HeaderImage from "../../../images/background3.jpg"

function RegisterError() {
    // Try to Remove footer margin-top from css
    try {
        const footer = document.querySelector("footer")
        footer.style.marginTop = "0"
    } catch (error) {
        console.log(error)
    }

    // Get username from Post Header
    const [username, setUsername] = useState("");
    setTimeout(() => {
        try {
            setUsername(window.location.href.split('?')[1].split('%20').join(' '));
        } catch (error) {
            console.log(error)
        }
    }, 1000)

    // Redirection
    const redirectToLearnPlateform = () => {
        window.location.href = 'https://learn.grassroot.academy'
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="welcome_header">
                <div className="welcome_header_container">
                    <div className="header2__container-bg">
                        <img src={HeaderImage} alt="Header bacground" />
                    </div>
                    <div className="header2__content">
                        <h2>{username} you're already registered</h2>
                        <button onClick={redirectToLearnPlateform} className='btnSubmit'>Go leaning plateform</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default RegisterError