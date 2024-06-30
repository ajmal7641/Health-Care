



import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../../src/pages/Doctors/DoctorDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Service from '../pages/Service'

import {Routes , Route} from 'react-router-dom'


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
      <Route path="/doctors/:id" element={<DoctorsDetails/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/services" element={<Service/>}/>


      
    </Routes>
  )
}

export default Routers