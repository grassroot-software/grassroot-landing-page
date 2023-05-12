import Header from "./Header"
import HeaderImage from "../images/background.jpg"

import {AiOutlineYoutube} from 'react-icons/ai'

const MainHeader = () =>{
    return(

        <>
        <Header title ="WELCOME TO GRASSROOT ACADEMY" image={HeaderImage}>
        YOUR CARRER IN WEB DEVELOPMENT STARTS HERE.
        <br></br>
        <br></br>
        <br></br> 
        <a className='btnYoutube' href="https://youtu.be/G-RAUC7v7KE"> Check this out <AiOutlineYoutube/></a>
        </Header>
        </>
    )
}

export default MainHeader;