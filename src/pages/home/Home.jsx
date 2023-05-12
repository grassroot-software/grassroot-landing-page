import MainHeader from '../../components/MainHeader'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import About from '../../components/About'
import Programs from '../../components/Programs'


import './home.css'

const Home = ()=>{
    return(
        <>
        <MainHeader />
        <Values/>
        <About/>
        <Programs/>
        < FAQs />
        <Testimonials />
        </>
        
    )
}

export default Home