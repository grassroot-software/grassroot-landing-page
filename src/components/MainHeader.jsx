import { useState, useEffect, useRef,} from "react"
import Header from "./Header"

import HeaderImage1 from "../images/background.jpg"
import HeaderImage2 from "../images/background2.jpg"

const MainHeader = () =>{
        
    const backgrounds =[
        {
            image: HeaderImage1,
            title: "WELCOME TO GRASSROOT",
            subtitle: "Your Career In Web Development Starts Here",
            extra: "Live, personal mentorship from industry experts in tech fields that employers need most"
        },
        {
            image: HeaderImage2,
            title: "Gain The Skills You Need To Get Hired ",
            extra: "By Employers Home And Abroad",
        }
    ]
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null);
    const delay = 10000;
    const {image, title, subtitle, extra} = backgrounds[index];
    

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
        <Header style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} title = {title} image={image}> 
        <i>{subtitle}</i> <h4>{extra}</h4> 
        </Header>
        </>
    )
}

export default MainHeader;