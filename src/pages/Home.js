import React from 'react';
import Navbar from '../Components/Navbar.js';
import Hero from '../Components/Hero.js';
import heroimg from '../Assets/heroImg.jpg';
import Destination from '../Components/Destination.js';
import Trips from '../Components/Trips.js';
import Footer from '../Components/Footer.js';


const Home = () => {
  return (
  <>
    <div>
      <Navbar/>
      <Hero cName="hero"
      heroimg={heroimg}
      title =" Your Journey Your Story"
      text="Choose Your Favourite Destination"
      buttonText ="Travel Plan"
      url ="/"
      btnClass="show"/>
    </div>
    <Destination/>
    <Trips/>
    <Footer/>
  </>
  )
}

export default Home;
