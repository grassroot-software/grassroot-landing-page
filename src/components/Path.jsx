import gif from '../images/gif.webp'
import {GiCheckMark} from 'react-icons/gi'
import {FaChalkboardTeacher} from 'react-icons/fa'
import img from '../images/01 (2).jpg'


const Path = () => {
  return (
    <>
      {/* <section  className='path'>
        <p>
            We believe quality education should be free and accessible to all.
            Our mission is to achieve the goal in training 1 million young Africans 
            with skills they need to get hired in web development jobs 
            and connect them to our network of remote employers home and abroad.
        </p>
    </section> */}
    <section className='path'>  
        
        <div className='container path__container'>
           <div className='path__image'>
                <img className='register__img' src={img} alt='Register' />
            </div>
            <div className='path__section-content'>
                <h1>HOW IT WORKS</h1>
                <h2> Register </h2><br></br>
                
                <p><GiCheckMark/> Register on the Grassroot platform to get started.</p>
               
            </div>
            
        </div>
    </section>

    <section className='path'>
        <div className='container path__container'>
            
            <div className='path__section-content'>
                <h2> 1 on 1 Mentorship </h2><br></br>
                
                <p><GiCheckMark/> Live personal mentorship from an industry experts.</p>
                <p><GiCheckMark/> Detailed feedback and reviews. </p>
                <p><GiCheckMark/> In-depth career services. </p><br></br>


                <h3> <FaChalkboardTeacher/>  On-demand Technical Coaching</h3>
                <p>Connect with our expert educators in real-time with our live chat service. Ask questions and get feedback fast. </p>
            </div>
            <div className='path__image'>
                <img src={gif} alt='Gif' />
            </div>
        </div>
    </section>


    <section className='path'>
        <div className='container path__container'>
            <div className='path__section-content'>
                <h2> Build </h2><br></br>
                <p> <GiCheckMark/> Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed systems, preparing you with skills high in demand in the global job market.</p>
            </div>
            <div className='path__section-content'>
                <h2> Verified Certificate </h2><br></br>
                
                <p><GiCheckMark/> By Studying At Grassroot And Completing The Full-Time Program, You Get A Verified Certificate.</p>
            </div>
        </div>
    </section>



    {/* <section className='path'>
        <div className='container path__container'>
            
            
        </div>
    </section> */}
    </>
  )
}

export default Path
