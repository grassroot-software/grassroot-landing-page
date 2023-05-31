import SmallerHeader from "../../components/SmallerHeader"
import HeaderImage from "../../images/community.jpg"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MockUpImage from '../../images/logo.jpg'
import {AiFillCaretRight} from 'react-icons/ai'

import '../home/home.css'

const Community = () => {
  return (
    <>
    <Navbar/>
    <SmallerHeader title ="JOIN OUR DISCORD COMMUNITY" image={HeaderImage}>
    Learn And Get Help From Fellow Students. Join The Grassroot Community On Discord.
    </SmallerHeader>

    <section>
        <div className='container about__Vision-container'>
            <div className='commnunity__image'>
                <img src={MockUpImage} alt='Grassroot' />
            </div>
            <div className='about__section-content'>
                <h1>YOU ARE NOT ALONE</h1>
                <p>Join Over 1000+ People Grassroot Students Are From Countries Around The World</p>
                <a href="https://learn.grassroot.academy/sign_up" className= 'btn lg' > Join Now! <AiFillCaretRight/> </a>
            
            </div>
        </div>
        
    </section>
    <Footer />
    </>
  )
}

export default Community