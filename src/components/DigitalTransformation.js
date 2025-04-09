import React from 'react';
import { Text } from '@fluentui/react';
import './../styles/DigitalTransformation.css';
import DigitalTransIcon from '../assets/DigitalTransIcon.png';

const DigitalTransformation = () => {
  return (
    <div className="digitalTransContainer">
      <img src={DigitalTransIcon} alt="DigitalTrans Icon" className="digitalTransIcon" />
      <div className="digitalTransContent">
        <Text variant="xxLarge" className="digitalTransTitle">
          <span className="digitalHeading">Digital </span><span className="transHeading">Transformation</span>
        </Text>
        <ul className="digitalTransList">
          <li className="digitalTransText">
          Contemporary, secured technology solutions have been at the crux of our digital transformation, 
          spearheading initiatives such as the Poornata App for unified mobile experiences, the AVA Chatbot and 
          RPA (Robotic Process Automation) enabled Process Operations which delivers 24/7 support and shorter turnaround time. 
          These digital interventions have significantly enhanced operational agility and employee experience.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalTransformation;
