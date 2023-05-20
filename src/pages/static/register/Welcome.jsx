import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { useState } from 'react';


function Welcome(infos) {
    const [username, setUsername] = useState("");
    setTimeout(() => {
        try {
            setUsername(window.location.href.split('?')[1].split('%20').join(' '));
        } catch (error) {        
            console.log(error)
        }
    }, 1000)
    console.log(username)

    return (
        <>
            <Navbar></Navbar>
                Welcome {username}
            <Footer></Footer>
        </>
    )

}

export default Welcome