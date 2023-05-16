import SmallerHeader from "../../components/SmallerHeader"
import HeaderImage from "../../images/background2.jpg"
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
    Terms & Conditions for Payment and Cancellation for our Learning Programmes. 
    </SmallerHeader>

    <section >
        <div className='container about__Vision-container'>
            <div className='commnunity__image'>
              <h3>Price List and Payment Deadline</h3><br></br>
              <img src={Image} alt='Grassroot' />
            </div>
            <div className='about__section-content'>
                <h2>Payments</h2><br></br>
                <p>The fees for the  programme must be paid in full as detailed in the table. Enrolment is not complete until Grassroot has received full payment of the fees. 
                  Accepted applicants will receive an automatically generated invoice which includes a payment link from a robust global payment gateway.
                  Accepted payment methods are VISA, Mastercard, or an International Wire Transfer.  
                  The Grassroot team will send an email to the applicant acknowledging receipt of funds, followed by an email confirmation of enrolment from Grassroot team.
                </p> <br></br>
                <h2>Cancellation</h2><br></br>
                <p>Notice of cancellation or rescheduling more than five (5) full business days prior to programme start date is eligible for a full refund or reschedule without penalty.
                  Notice of cancellation/rescheduling on or after the fifth (5th) full business day prior to programme start date is not eligible for refund and is subject to approval and a reschedule penalty may apply.
                  To request a reschedule within the qualifying period,  a future date must be identified immediately. In the event, the request is accepted the rescheduled date is limited to one time and for only the same course. The new course must begin up to a maximum of twelve months from the original course date.
                  For no-shows, payment is non-refundable. “No Shows” is defined as the student does not show up on the date the course starts, and there was no prior communication from the student to cancel or reschedule the course.
                </p>
            </div>
            
        </div>
        
    </section>
    <Footer />
    </>
  )
}

export default Payments