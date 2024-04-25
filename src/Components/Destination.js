import React from 'react';
import './Destination.css';
import DestinationItems from './DestinationItems';
import image1 from '../Assets/5.jpg';
import image2 from '../Assets/6.jpg';
import image3 from '../Assets/8.jpg';
import image4 from '../Assets/9.jpg';

const Destination = () => {
  return (
<>
    <div className="destination">
        <div className="des-title">
        <h1>Popular Destinations</h1>
        <p> Tours gives you an opportunity to know yourself </p>
        </div>
    </div>
    <DestinationItems className="des-body"
  heading="Tal Valcano Batangas"
  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
   sunt in culpa qui officia deserunt mollit anim id est laborum."
  img1={image1}
  img2={image2}
/>
<DestinationItems className="des-body-reverse"
  heading="Arches National Park"
  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
   sunt in culpa qui officia deserunt mollit anim id est laborum."
  img1={image3}
  img2={image4}
/>

    
</>
  )
}

export default Destination;
