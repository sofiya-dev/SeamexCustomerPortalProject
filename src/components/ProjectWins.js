import React from 'react';
import { Card } from '@fluentui/react-components';
import { ChevronRight24Filled } from '@fluentui/react-icons';

import projectWinsImg1 from '../assets/RPA_Implementation_for_Operational_Excellence_Image.png';
import projectWinsImg2 from '../assets/Calibration_Dashboard_Rollout_for_Novelis_Image.png';
import projectWinsImg3 from '../assets/Talent_Staffing_Dashboard_Image.png';

import './../styles/ProjectWins.css';

const projects = [
  {
    title: 'RPA Implementation for Operational Excellence',
    date: 'April, 2024',
    image: projectWinsImg1,
  },
  {
    title: 'Calibration Dashboard Rollout for Novelis',
    date: 'April, 2023',
    image: projectWinsImg2,
  },
  {
    title: 'Talent Staffing Dashboard',
    date: 'November, 2023',
    image: projectWinsImg3,
  }
];

export const ProjectWins = () => {
  return (
    <div className="projectWinsContainer">
      <h1>Project Wins</h1>
      <p className="description">
        View our collection of key projects that have significantly impacted our clients. 
        At Seamex HR SSC, we specialize in delivering contemporary HR solutions that streamline processes 
        and enhance experience across employees, Managers, and HR teams in the group.
      </p>
      <div className="projectGrid">
        {projects.map((project, idx) => (
          <Card key={idx} className="projectCard">
            <img src={project.image} alt={project.title} className="projectImage" />


            <div className="arrowIcon"><ChevronRight24Filled /></div>


            <h3 className="imageTitle">{project.title}</h3>
            <p className="date">({project.date})</p>
            <button className="knowMore">Know More</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

