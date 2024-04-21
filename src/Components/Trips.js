import React from 'react';
import './Trips.css';
import TripsData from './TripsData';
import imageTrip1 from '../Assets/10.jpg';
import imageTrip2 from '../Assets/11.jpg';
import imageTrip3 from '../Assets/12.jpg';

const Trips = () => {
  return (
    <div className='Trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className='Trip-container'>
      <div className='Trip-container1'>
       <TripsData
        imageTrip={imageTrip1}
        heading = 'Trips in Indoneasia'
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat"
       />
      </div>

      <div className='Trip-container2'>
       <TripsData
        imageTrip={imageTrip2}
        heading = 'Trips in Indoneasia'
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat"
       />
      </div>

      <div className='Trip-container3'>
       <TripsData
        imageTrip={imageTrip3}
        heading = 'Trips in Indoneasia'
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat"
       />
       </div>
      </div>
    </div>
  )
}

export default Trips;
