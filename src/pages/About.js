import React from 'react';
import Navbar from '../Components/Navbar';
import nightimg from '../Assets/night.jpg';
import Hero from '../Components/Hero.js';
import Footer from '../Components/Footer.js'
import AboutUs from '../Components/AboutUs.js';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero cName="Hero_About"
      heroimg={nightimg}
      title ="About"/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default About;
