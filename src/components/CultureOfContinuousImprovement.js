import React from 'react';
import { Text } from '@fluentui/react';
import './../styles/CultureOfContinuousImprovement.css';
import ImprovementIcon from '../assets/ImprovementIcon.png';

const CultureOfContinuousImprovement = () => {
  return (
    <div className="improvementContainer">
      <img
        src={ImprovementIcon}
        alt="Continuous Improvement Icon"
        className="improvementIcon"
      />

      <div className="improvementContent">
        <Text variant="xxLarge" className="improvementTitle">
          <span className="cultureHeading">Culture of </span><span className="improvementHeading">Continuous Improvement</span>
        </Text>
        <ul className="improvementList">
          <li className="improvementText">
            At Seamex, we foster a culture of continuous improvement and customer-centricity.
            Our quality assurance frameworks, including WCQ (Work Culture Quality) and PDCA
            (Plan-Do-Check-Act), drive ongoing optimization of processes and service delivery.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CultureOfContinuousImprovement;
