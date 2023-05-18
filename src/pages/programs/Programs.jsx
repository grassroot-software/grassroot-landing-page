import SmallerHeader from "../../components/SmallerHeader"
import HeaderImage from "../../images/background3.jpg"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Card from "../../UI/Card2"

import {AiFillCaretRight} from 'react-icons/ai'
import {GiCheckMark} from 'react-icons/gi'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'

import gif from '../../images/gif.webp'
import img1 from '../../images/pic.webp'
import img2 from '../../images/picture4.webp'
import img3 from '../../images/pic3.webp'
import imgSoft from '../../images/picture3.webp'
import img5 from '../../images/laptop.jpg'
import img6 from '../../images/ladyImage.jpg'
import img7 from '../../images/js.jpg'
import { Link } from "react-router-dom"

const Programs = () => {
  return (
    <>
    <Navbar />
    <SmallerHeader title ="A TEAM BUILT AROUND YOUR SUCCESS." image={HeaderImage}>A dedicated team is focused entirely on you. From day-to-day mentor guidance, to career coaching throughout the program and beyond, you’re never without support.
    </SmallerHeader>
    <section className='path'>  
        
        <div className='container path__container'>
            <div className='path__image'>
                    <img src={img1} alt='Gif' />
            </div>   
            <div className='path__section-content'>
                <p>Step 1:</p>
                <h1>Choose a program.</h1><br></br>
                <p>Partner with an Admissions Rep to talk about your career goals and
                 choose the right program for you. Then, choose from a range of student-friendly payment options, 
                 such as paying upfront, month to month, or deferring tuition until after you're hired.
                </p>
               
            </div>
            
        </div>
    </section>

    <section className='path'>
        <div className='container path__container'>           
        <div className='path__section-content'>
                <p>Step 2:</p>
                <h1>Start learning.</h1><br></br>
                <p>Learn the skills to break into a new career, with a dedicated team by your side. 
                    You'll have the full support of your personal mentor, Academic Success Manager, 
                    and expert, on-demand help via live chat. 
                    Study part-time while working, or full-time to speed up your career change.
                </p> 
            </div>
            <div className='path__image'>
                <img src={img2} alt='Gif' />
            </div>
        </div>
    </section>


    <section className='path'>
        <div className='container path__container'>  
            <div className='path__image'>
                    <img src={img3} alt='Gif' />
            </div>         
            <div className='path__section-content'>
                    <p>Step 3:</p>
                    <h1>Launch a career.</h1><br></br>
                    <p>Follow up your program with 6 months of career support. Your career coach will 
                        help you tailor your portfolio and resume, create a target employer list, 
                        nail your interviews, and negotiate for the highest salary.
                    </p> 
                </div>
            
            </div>
    </section>


    <section>
        <div>
            <h1>Our programs</h1>
        </div>
    </section>


    <section className='path'>
        <div className='container programs__block__container'> 
            <div className='container programs__path__container'>  

                <div className='path__image'>
                        <img src={imgSoft} alt='Gif' />
                </div>         
                <div className='path__section-content'>
                    <br></br><h2>Software Engineering.</h2><br></br>
                    <p>Become a full-stack web developer with the commitment level that’s right for you.

                    </p> 
                </div>
            
            </div>
            <div className='container programs__path__container'>  

                <div className='path__image'>
                        <img src={img5} alt='Gif' />
                </div>         
                <div className='path__section-content'>
                    <br></br><h2>Full stack Ruby on Rails.</h2><br></br>
                    <p>Ruby on Rails is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, 
                        providing default structures for a database, a web service, and web pages
                    </p> 
                </div>

            </div>



            <div className='container programs__path__container'>  

                <div className='path__image'>
                        <img src={img6} alt='Gif' />
                </div>         
                <div className='path__section-content'>
                    <br></br><h2>Full stack Javascript</h2><br></br>
                    <p>The program allows you to undergo intensive training that will allow you to launch a career as a 
                        FullStack JS developer and master the technologies demanded by employers.
                    </p> 
                </div>

            </div>

        </div>
       
    </section>
    <section className='path'>
        <div className='container programs__block__container'> 
             <div className='container programs__path__container'>  

                <div className='path__image'>
                        <img src={img7} alt='Gif' />
                </div>         
                <div className='path__section-content'>
                    <br></br><h2>Intermediate and Advanced HTML and CSS</h2><br></br>
                    <p>Learn to Code Advanced HTML & CSS takes a deeper look at front-end
                         design and development. Studying modern front-end development, this guide teaches the 
                        latest for any designer looking to round out their front-end skills.
                    </p> 
                </div>

            </div>
        </div>
       
    </section>

    <section className='path'>
        <div className='container path__container'>
            
            <div className='path__section-content'>
                <p> 1 on 1 Mentorship </p><br></br>
                <h3> Get matched with a personal mentor who works in the industry</h3> 
                    <h3>Learn from their invaluable real-world career experiences.
                </h3><br></br>
                
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
                <div className="table__content">
                    <h2> Flexible options to fund your tech career.</h2><br></br>
                    <h4>Our payment plans are built around your needs. 
                        Whether you can finance your studies upfront, 
                        or want to pay us back when you've secured a job, we've got you covered.
                    </h4>
                </div>
               
            </div>
            <div className='path__section-content'>
                <table>
                    <tr>
                        <td>Pay Upfront: </td>
                        <td>$2,700 <MdKeyboardArrowDown/><br></br><small>Total cost</small></td>
                    </tr>
                    <tr>
                        <td>Month to Month:</td>
                        <td>$400 <MdKeyboardArrowDown/><br></br><small>Monthly payment</small></td>
                    </tr>
                    <tr>
                        <td>Deferred Tuition: <br></br>pay us when you've secured a job</td>
                        <td>$0 <MdKeyboardArrowDown/><br></br><small>(while enrolled)</small></td>
                    </tr>
                </table>
            </div>
        </div>
    </section>

    <section className="testimonials">
        <div className="container testimonials__container"> 
            <Card className='testimonial'>
                
                    <p className="testimonial__quote">"Everything begins with an action"</p>
                    <Link to ="/signup" className= 'btn lg' > Get Started <AiFillCaretRight/> </Link>
                    
            </Card>
        </div>
    </section>



    <Footer />
    </>
  )
}

export default Programs