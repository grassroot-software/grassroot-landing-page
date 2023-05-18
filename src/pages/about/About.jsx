import SmallerHeader from "../../components/SmallerHeader"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AboutUsImage1 from '../../images/about.webp'
import AboutUsImage2 from '../../images/ladyImage.jpg'
import AboutUsImage3 from '../../images/laptop.jpg'
import HeaderImage from "../../images/background.jpg"
import {BsDot} from "react-icons/bs"


const About = () => {
  return (
    <>
    <Navbar />
    <SmallerHeader title ="ABOUT GRASSROOT" image={HeaderImage}>
    Grassroot is run by an open community of experienced software engineers from Havard and universities around the world.
    </SmallerHeader>
    <section className='about__Vision'>
        <div className='container about__Vision-container'>
            
            <div className='about__section-content'>
                <h1> About Grassroot</h1>
                <p>
                At  Grassroot, there are no tuition fees for all Africans until you graduate and start working. 
                The curriculum was designed with love,  highly digestible and easy to understand. 
                Accessible to all students who have the grit and temerity to study on their own without a 
                personal coach. 
                </p>
                <p>
                Studying software engineering can be tough and challenging, Good mentorship, 
                especially in the early stages of your career, is really important, and 
                it might be worth paying a  
                small fee for a remote mentor  who walks you 
                through every step in becoming a seasoned Software Engineer.
                </p>
                <p>
                A personal mentor who works in the industry will be assigned to you.
                Live, personal mentorship from an industry expert over a  
                regularly scheduled zoom class tailored to suit your free  time. 
                At Grassroot we charge a small fee for this added service.
                </p>
                <h2> Mastery Based Learning</h2>
                <p>
                At Grassroot we employ a teaching approach that requires students to
                demonstrate a thorough understanding of a module or subject before moving 
                on to the next module or subject in the curricular progression.
                </p>
            </div>
            <div className='about__Vision-image'>
                <img src={AboutUsImage1} alt='About Us' />
            </div>
        </div>
    </section>


    <section className='about__Vision'>
        <div className='container about__Vision-container'>
        <div className='about__Vision-image'>
                <img src={AboutUsImage3} alt='About Us' />
            </div>
            <div className='about__section-content'>
                <h2> Grassroot’s Full-Stack Web Development Program</h2>
                <p>
                Across the global job market, full-stack developers are in demand for their broad 
                knowledge and excellent IT skills. According to LinkedIn’s 2020 Emerging Jobs Report, 
                full-stack web development is number four in the top 15 emerging jobs in the U.S. 
                </p>
                <p>
                You can expect rewarding career opportunities by pursuing a full-stack web development course.
                Grassroot’s Full-Stack Web Development program helps students learn all the 
                necessary elements to succeed as international, remote web developers.
                </p>
            </div>
        </div>
    </section>


    <section className='about__Vision'>
        <div className='container about__Vision-container'>
            <div className='about__section-content'>
                <h2> What Does Full-Stack Web Development Mean?</h2>
                <p>
                Full-stack development is the complete process of developing an app or 
                software from an initial idea. It involves front-end and back-end development, 
                project management, development, and operations. In joining the full-stack 
                web development program at Grassroot, you will learn JavaScript, React, 
                data structures and algorithms, databases, 
                object-oriented programming, API development, and much more. 
                </p>
            </div>
            <div className='about__section-content'>
                <h2> What Will I Learn in Grassroot’s Full-Stack Web Development Program?</h2>
                <p>
                Grassroot’s full-stack web development program is a great place to enhance your 
                technical and non-technical skills. By teaching students non-technical skills 
                like building a professional network and job searching tips, 
                Grassroot's curriculum aims to help students get jobs. 
                </p>
            </div>  
        </div>
    </section>

    <section className='about__Vision'>
        <div className='container about__Vision-container'>
            <div className='about__section-content'>
                <h2> What Jobs Can I Get After Grassroot's Full-Stack Web Development Program?</h2>
                <p>
                As the importance of technology in business continues, the demand for 
                full-stack web developers will grow. According to recent reports from the 
                US Bureau of Labor Statistics, web developers are expected to see a 
                23% growth in job opportunities from 2021 to 2031.
                </p>
                <p>
                Grassroot helps students find their dream job from their first day at Grassroot.
                After joining the program, you will learn various skills like problem-solving, 
                collaboration, and communication to help you land a job. With these skills, 
                you can apply for the role of a full-stack developer in different IT firms, 
                including startups, large corporations, multinationals, small businesses, and more.
                </p>
            </div>
            <div className='about__Vision-image'>
                <img src={AboutUsImage2} alt='About Us' />
            </div>
            
        </div>
    </section>


    <section className='about__Vision'>
        <div className='container about__Vision-container'>
            <div className='about__section-content'>
                <h3> Check out the job roles you can pursue after completing this web development program: </h3>
                <ul>
                    <li><BsDot/> Full-stack Developer </li>
                    <li><BsDot/> Front-end Developer </li>
                    <li><BsDot/> Back-end Developer </li>
                    <li><BsDot/> Computer Systems Analyst  </li>
                    <li><BsDot/> Database Administrator </li>
                    <li><BsDot/> Web developer </li>
                    <li><BsDot/> Computer Systems Administrator </li>
                </ul>
            </div>
            <div className='about__section-content'>
                <h3> What is a Full-Stack Developer Salary I Could Make After Completing the Program?</h3>
                <ul>
                    <li><BsDot/> The full-stack developer's salary varies depending on various 
                        factors such as job type, location, and experience level. 
                        According to Indeed’s salary data, a web developer 
                        has an average base salary of USD 79,740 per year as of November 2022.
                     </li>
                    <li><BsDot/>  Your starting salary after completing the program will 
                        depend on your skills, expertise, and location.
                    </li>
                </ul>
                <br></br>
                <p>At Grassroot, everyone gets a chance to learn, grow and 
                        become a global software developer, no matter their background. 
                </p>
            </div>  
        </div>
    </section>

   
    <Footer />
    </>
  )
}

export default About