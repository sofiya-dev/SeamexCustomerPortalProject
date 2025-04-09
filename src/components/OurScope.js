import React from 'react';
import { Text } from '@fluentui/react';
import './../styles/OurScope.css';
import ScopeIcon from '../assets/OurScopeIcon.png';

const OurScope = () => {
  return (
    <div className="scopeContainer">
      <img src={ScopeIcon} alt="Scope Icon" className="scopeIcon" />
      <div className="scopeContent">
        <Text variant="xxLarge" className="scopeTitle">
          <span className="ourHeading">Our </span><span className="scopeHeading">Scope</span>
        </Text>
        <ul className="scopeList">
          <li className="scopeText">
            We service all management cadre employees across the group globally, 
            for Hire to Retire Processes and Tech enabled employee Experience,
             including 125+ data integrations that streamline processes and enhance operational efficiency.
          </li>
          <li className="scopeText">
            We service Staff and Workmen cadre employees for businesses opting
             to have a single system of records across all cadres.
          </li>
          <li className="scopeText">
            We service 65% of Group’s on roll employees.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurScope;
