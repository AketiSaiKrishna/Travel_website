import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero.js';
import Contactimg from '../Assets/4.jpg';
import Footer from '../Components/Footer.js'
import ContactForm from '../Components/ContactForm.js';

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <Hero cName="Hero_Contact"
    heroimg={Contactimg}
    title ="Contact"/>  
    <ContactForm/> 
    <Footer/>
    </div>
  )
}

export default Contact;
