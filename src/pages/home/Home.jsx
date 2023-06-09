import MainHeader from '../../components/MainHeader'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import About from '../../components/About'
import Programs from '../../components/Programs'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Path from '../../components/Path'
import './home.css'

const Home = ()=>{
    return(
        <>
        <Navbar />
        <MainHeader />
        <About/>
        <Path />
        <Programs/>
        < FAQs />
        <Testimonials />
        <Footer />
        </>
        
    )
}

export default Home