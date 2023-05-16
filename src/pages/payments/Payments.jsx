import SmallerHeader from "../../components/SmallerHeader"
import HeaderImage from "../../images/community.jpg"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from '../../images/p.jpg'
import {AiFillCaretRight} from 'react-icons/ai'

import '../home/home.css'


const Payments = () => {
  return (
    <>
    <Navbar />
    <SmallerHeader title ="PAYMENT & CANCELLATION POLICIES" image={HeaderImage}>
    Payment and Cancellation Terms & Conditions for students of our Learning Programmes. 
    </SmallerHeader>

    <section >
        <div className='container about__Vision-container'>
            
            <div className='about__section-content'>
                <h1>YOU ARE NOT ALONE</h1>
                <p>Join Over 1000+ People Grassroot Students Are From Countries Around The World</p>
                <a href="https://learn.grassroot.academy/sign_up" className= 'btn lg' > Join Now! <AiFillCaretRight/> </a>
            
            </div>
            <div className='commnunity__image'>
                <img src={Image} alt='Grassroot' />
            </div>
        </div>
        
    </section>
    <Footer />
    </>
  )
}

export default Payments