import gif from '../images/gif.webp'
import {GiCheckMark} from 'react-icons/gi'
import {SiMediamarkt} from 'react-icons/si'
import {FaChalkboardTeacher} from 'react-icons/fa'


const Path = () => {
  return (
    <section className='path'>
        <div className='container path__container'>
            
            <div className='path__section-content'>
                <h2> CHOOSE YOUR PATH </h2><br></br>
                <h3> <SiMediamarkt/>  The Free path- <i>Self study</i></h3>
                <p>
                Our mission is to provide quality training in software engineering at no upfront cost to 
                our students. Hence the Grassroot curriculum was designed to be highly digestable and easy 
                to understand so that students can study the full technical curriculum on their own without a mentor .
                </p>
                <h3> <FaChalkboardTeacher/>  Careeer Coach- <i>Paid Path</i></h3>
                <p>
                Do you value 1 on 1 mentorship over self study? Perhaps you are willing to pay a low fee in exchange 
                for great mentoring. Good mentorship, especially in the early stages of your career, is really important, 
                and it might be worth paying a small fee for a remote mentor who walks you through every step in becoming a 
                seasoned Software Engineer. </p>
                <p><GiCheckMark/> A personal mentor who works in the industry will be assigned to you. </p>
                <p><GiCheckMark/> Live personal mentorship from an industry expert over a regularly scheduled zoom class tailored to suit your free time.</p>
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