import { Link } from "react-router-dom"
import Logo from '../images/logo.png'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                We believe it's time for mother Africa to rise. Our mission is to achieve the goal in 
                training 1 million young Africans in advanced Software Enginering courses and connect them to a 
                network of remote employers home and abroad. To accelerate the Digital revolution in Africa and lift lives out of poverty .
                </p>
            </article>
            <article>
                <h4> Hyperlinks</h4>
                <a href='/' > Grassroot</a>
                <a href='/about_grassroot'> About Us</a>
                
                
                
            </article>
            <article>
                <h4> Get Started</h4>
                <a href='/signup'>Register </a>
                <a href='https://learn.grassroot.academy/sign_in'>Login </a>
            </article>
            <article>
                <h4> Contact Us</h4>
                <a href='mailto:Management@grassroot.academy' target='_blank' rel='noreferrer noopener'>Send Us A Mail</a>
            </article>
        </div>
        <div className="footer__copyright">
            <small>Grassroot Theme Powered by: Grassroot Software Academy</small>
        </div>
    </footer>
  )
}

export default Footer