import MainHeader from '../../components/MainHeader'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import About from '../../components/About'
import Programs from '../../components/Programs'
import MoreIntro from '../../components/MoreIntro'
import Path from '../../components/Path'
import './home.css'

const Home = ()=>{
    return(
        <>
        <MainHeader />
        <About/>
        <MoreIntro/>
        <Values/>
        <Path />
        <Programs/>
        < FAQs />
        <Testimonials />
        </>
        
    )
}

export default Home