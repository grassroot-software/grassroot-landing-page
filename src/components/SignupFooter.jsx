import {MdArrowForwardIos} from 'react-icons/md'

const SignupFooter = () => {
  return (
    <div className="footer2" >
        <div className="container SignupFooter__container">
           <article>
                <a href="./criteria">Eligibility Criteria <MdArrowForwardIos/> </a>
           </article>
           <article className="payment__container">
                <a href="./payments">Payment and Policies <MdArrowForwardIos/> </a>
           </article>
            
            
        </div>
        <div className="footer2__copyright">
            <small>Grassroot Theme Powered by: Grassroot Software Academy</small>
        </div>
    </div>
  )
}

export default SignupFooter