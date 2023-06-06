import {MdArrowForwardIos} from 'react-icons/md'
import {Link} from 'react-router-dom'

const SignupFooter = () => {
  return (
    <div className="footer2" >
        <div className="container SignupFooter__container">
           <article>
                <Link to= "/criteria">Eligibility Criteria <MdArrowForwardIos/> </Link>
           </article>/
    
           <article className="payment__container">
                Payment and Policies
           </article>
           
            
            
        </div>
        <div className="footer2__copyright">
            <small>Grassroot Theme Powered by: Grassroot Software Academy</small>
        </div>
    </div>
  )
}

export default SignupFooter
