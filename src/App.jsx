import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Community from './pages/community/Community'
import Signup from './pages/signup/Signup'
import Criteria from './pages/criteria/Criteria'
import About from './pages/about/About'
import Programs from './pages/programs/Programs'
import PaymentForm from './pages/makePayment/PaymentForm'
import Payments from './pages/payments/Payments'
import ScrollToTop from './ScrollWrapper'

import Welcome from './pages/static/register/Welcome'
import WelcomePro from './pages/static/register/WelcomePro'
import RegisterError from './pages/static/register/Error'
import Admin from './pages/static/admin/Admin'

const App = () => {
  return (
    
    <BrowserRouter>
       <ScrollToTop>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path ='about_grassroot' element = {<About/>}/>
          <Route path ='discord' element = {<Community/>}/>
          <Route path ='welcome' element = {<Welcome/>}/>
          <Route path ='welcome_pro' element = {<WelcomePro/>}/>
          <Route path ='register_error' element = {<RegisterError/>}/>
          <Route path ='admin' element = {<Admin/>}/>
          <Route path ='payment'element = {<PaymentForm />} />
          <Route path ='payments'element = {<Payments />} />
          <Route path ='signup' element = {<Signup/>}/>
          <Route path ='programs' element = {<Programs/>}/>
          <Route path ='criteria' element = {<Criteria/>}/>
        </Routes>
      </ScrollToTop>
        
    </BrowserRouter>
  )
}

export default App