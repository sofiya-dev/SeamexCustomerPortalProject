import React from 'react';
import { Text } from '@fluentui/react';
import './../styles/OurTeam.css';
import TeamIcon from '../assets/OurTeamIcon.png';

const OurTeam = () => {
  return (
    <div className="teamContainer">
      <div className="teamContent">
        <Text variant="xxLarge" className="teamTitle">
          <span className="ourHeading">Our </span><span className="teamHeading">Team</span>
        </Text>
        <ul className="teamList">
          <li className="teamText">
            Our strength lies in a dedicated team of 135+ professionals, collectively bringing over 950+ years of experience with pedigree across Digital & Technology, User Experience, HR Operations, Data Analytics, Project Management, Risk, and Business Assurance.
          </li>
        </ul>
      </div>
      <img src={TeamIcon} alt="Team Icon" className="teamIcon" />
    </div>
  );
};

export default OurTeam;
