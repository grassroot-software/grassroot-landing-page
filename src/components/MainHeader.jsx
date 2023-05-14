import { useState, useEffect, useRef  } from "react"
import Header from "./Header"

import HeaderImage1 from "../images/background.jpg"
import HeaderImage2 from "../images/background2.jpg"

const MainHeader = () =>{
        
    const backgrounds =[
        {
            image: HeaderImage1,
            title: "Welcome to Grassroot",
            subtitle: "YOUR CARRER IN WEB DEVELOPMENT STARTS HERE"

        },
        {
            image: HeaderImage2,
            title: "Gain The Skills You Need To Get Hired ",
            subtitle: "By Employers Home And Abroad"
        }
    ]
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null);
    const delay = 5000;
    const {image, title, subtitle } = backgrounds[index];
    

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);


    return(

        <>
        <Header style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} title = {title} image={image}> <br></br>
        {subtitle}.
        </Header>
        </>
    )
}

export default MainHeader;