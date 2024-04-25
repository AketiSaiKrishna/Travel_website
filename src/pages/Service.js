import React from 'react';
import Footer from '../Components/Footer.js'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero.js';
import Serviceimg from '../Assets/2.jpg';
import Trips from '../Components/Trips.js';


const Service = () => {
  return (
    <div>
    <Navbar/>
    <Hero cName="Hero_Service"
    heroimg={Serviceimg}
    title ="Our Services"/>
    <Trips/>
    <Footer/>
  </div>
  )
}


export default Service;
