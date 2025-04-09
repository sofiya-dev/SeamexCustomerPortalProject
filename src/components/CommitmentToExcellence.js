import React from 'react';
import { Text } from '@fluentui/react';
import './../styles/CommitmentToExcellence.css';
import ExcellenceIcon from '../assets/ExcellenceIcon.png';

const CommitmentToExcellence = () => {
  return (
    <div className="excellenceContainer">
      <div className="excellenceContent">
        <Text variant="xxLarge" className="excellenceTitle">
          <span className="commitmentHeading">Commitment to </span> <span className="excellenceHeading">Excellence</span>
        </Text>
        <ul className="excellenceList">
          <li className="excellenceText">
            Upholding rigorous standards, we hold ISO certifications and comply with GDPR regulations, 
            ensuring data security and privacy. With a flawless record of zero data breaches since inception, 
            we prioritize service continuity and proactive risk management.
          </li>
        </ul>
      </div>
      <img src={ExcellenceIcon} alt="Commitment to Excellence Icon" className="excellenceIcon" />
    </div>
  );
};

export default CommitmentToExcellence;
