import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
// import { useState } from 'react';
import HeaderImage from "../../../images/background3.jpg"
import "./welcome.css"

function Welcome(infos) {
    // Get username from Post Header
    // const [username, setUsername] = useState("");
    // setTimeout(() => {
    //     try {
    //         setUsername(window.location.href.split('?')[1].split('%20').join(' '));
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, 1000)

    return (
        <>
            <Navbar></Navbar>
            <div className="welcome_header">
                <div className="welcome_header_container">
                    <div className="header2__container-bg">
                        <img src={HeaderImage} alt="Header bacground" />
                    </div>
                    <div className="header2__content">
                        <h2>Welcome To Grassroot Software</h2>
                        <p className='p-big'>Congratulations, your registration at Grassroot Software Academy was successful. Your personal career coach will contact you in 24hrs.</p>
                        <a href="https://learn.grassroot.academy/sign_up">Click here to create your learning portal</a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )

}

export default Welcome