import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experience from './Components/Experience'
import Services from './Components/Services/Services'
import Contact from './Components/Contact'
import Social_link from './Components/Hero/Social-link'
import Footer from './Components/Footer'
import GoToTop from './Components/GoToTop'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GoToTop/>
      <BrowserRouter>
      <Navbar/>
      <Social_link/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
         <Route path='/Experience' element={<Experience/>}/>
         <Route path='/contact'   element= {<Contact/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App
