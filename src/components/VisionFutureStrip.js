import React from 'react';
import './../styles/VisionFutureStrip.css';

import VisionStrip from '../assets/VisionfortheFutureStrip.png'; 

const VisionFutureStrip = () => {
  return (
    <div className="visionFutureStripContainer">
  
   <img className= "visionStrip" src={VisionStrip} alt="Vision for the Future Strip" />

   <div className="messageBanner">
       <p> Join us on our journey as we redefine the future of HR shared services,
        delivering seamless experiences and setting new standards of excellence in the industry.
        At Seamex, we are dedicated to driving innovation, operational efficiency,
        unparalleled service quality in HR across Aditya Birla Group.</p>
      </div>

    </div>
    
  );
};

export default VisionFutureStrip;
