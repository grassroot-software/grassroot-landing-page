import gif from '../images/gif.webp'
import {GiCheckMark} from 'react-icons/gi'
// import {SiMediamarkt} from 'react-icons/si'
import {FaChalkboardTeacher} from 'react-icons/fa'


const Path = () => {
  return (
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
  )
}

export default Path

// TiTickOutline
// BsFillBookmarkCheckFill
// BsBookmarkCheck
// GiCheckMark
// RxBookmarkFilled
// SiMediamarkt
// SiMediamarkt
// FaGraduationCap
// FaUserGraduate
// GiGraduateCap
// FaChalkboardTeacher
// MdComputer