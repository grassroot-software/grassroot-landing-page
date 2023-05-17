import SmallerHeader from "../../components/SmallerHeader"
import HeaderImage from "../../images/background3.jpg"
import Navbar from '../../components/Navbar'
import SignupFooter from "../../components/SignupFooter"
import {GiCheckMark} from 'react-icons/gi'


const Criteria = () => {
  return (
    <>
    <Navbar />
    <SmallerHeader title ="Gain The Skills You Need To Get Hired " image={HeaderImage}>CONFIRM YOUR ELIGIBILITY
    </SmallerHeader>
    <section >
      < div className='container criteria_container'>
            <div className='criteria_options'>
                <h2 className='signup_option_h2'>Eligibility Criteria</h2>
                <article className='signup_option'>
                    <h4 className='signup_option_h4'>For Africans</h4>
                    <ul>
                          
                        <li><GiCheckMark/>  Must be of African origin.</li>
                        <li><GiCheckMark/>  May not pay full tuition until they graduate and start working.</li>
                        <li><GiCheckMark/>  Age between 18-34 years.</li>
                        <li><GiCheckMark/>  Access to a computer and internet during the programme.</li>  
                       
                    </ul>
                </article>
                <article className='signup_option'>
                    <h4 className='signup_option_h4'>For Non-Africans</h4>
                    <ul>
                        <li><GiCheckMark/>  Must pay for course</li>
                        <li><GiCheckMark/>  Must be 18 years and above</li>
                        <li><GiCheckMark/>  Access to a computer and internet during the programme</li>  
                    </ul>
    
                </article>
            </div>
        </div>
    
    </section>  
    <SignupFooter />
    </>  
  )
}

export default Criteria