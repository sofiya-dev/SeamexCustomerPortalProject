// src/components/AboutUs.jsx
import React from 'react';
import './AboutUsBase.css';
import linksData from './linksData';

const AboutUsBase = () => {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsHeader">About Us</div>
      <div className="linksGrid">
        {linksData.map((column, colIndex) => (
          <div className="linkColumn" key={colIndex}>
            {column.map((link, index) => (
              <span className="linkItem" key={index}>{link}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsBase;
