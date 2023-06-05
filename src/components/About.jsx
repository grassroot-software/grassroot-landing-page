import StoryImage from '../images/she.jpg'
import { FaCrown } from 'react-icons/fa'


const About = () => {
  return (
    <section className='about__Vision'>
      <div className='container about__Vision-container'>

        <div className='about__section-content'>
          <h1> About Grassroot</h1>
          <p>At Grassroot, there are no tuition fees for all Africans until you graduate and start working.</p>
          <p>            
            We believe quality education should be free and accessible to all.
            Our mission is to achieve the goal in training 1 million young Africans
            with skills they need to get hired in web development jobs and
            connect them to our network of remote employers home and abroad.
          </p>
          
          <p>
            During the full-time technical curriculum, students spend 4 to 5 months learning the most in-demand
            skills in web development, developing thier technical skills, building projects,
            from simple scripts to full web apps and deployed systems, improving the skills they need to excel
            in the global job market
          </p><br></br>
          <h4> <FaCrown /> Our full stack curriculum is free and supported by a passionate community
            of web engineers from Harvard University and Beyond..."
          </h4>
        </div>
        <div className='about__Vision-image'>
          <img src={StoryImage} alt='About Us' />
        </div>
      </div>
    </section>
  )
}

export default About