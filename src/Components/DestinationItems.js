import React from 'react';
import './Destination.css';

const DestinationItems = (props) => {
  return ( 
       <div className={props.className}>
          <div className='des1'>
            <h2> {props.heading}</h2>
            <p>{props.body}</p>
          </div>
          <div className='des2'>
             <img src={props.img1} alt='image1'/>
             <img  src={props.img2} alt='image2'/>
          </div>
       </div>
  )
}

export default DestinationItems
