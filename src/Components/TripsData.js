import React from 'react';
import './Trips.css';


const TripsData = (props) => {
  return (
    <div className='Trip-card'>
        <div className='Trip-image'>
        <img src={props.imageTrip} alt='image1'/>
        </div>
        <div className='Trip-text'>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div> 
    </div>
  )
}

export default TripsData
