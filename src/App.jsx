import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Payments from './pages/payments/Payments'
import Community from './pages/community/Community'
import Signup from './pages/signup/Signup'
import Criteria from './pages/criteria/Criteria'
import About from './pages/about/About'
import Programs from './pages/programs/Programs'

import ScrollToTop from './ScrollWrapper'


const App = () => {
  return (
    
    <BrowserRouter>
       <ScrollToTop>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path ='about_grassroot' element = {<About/>}/>
          <Route path ='discord' element = {<Community/>}/>
          <Route path ='payments' element = {<Payments/>}/>
          <Route path ='signup' element = {<Signup/>}/>
          <Route path ='programs' element = {<Programs/>}/>
          <Route path ='criteria' element = {<Criteria/>}/>
        </Routes>
      </ScrollToTop>
        
    </BrowserRouter>
  )
}

export default App