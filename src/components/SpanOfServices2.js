import React from "react";
import { PrimaryButton, DefaultButton, IconButton } from "@fluentui/react";
import "./../styles/SpanOfServices2.css";
import ServiceImage from "../assets/ServiceImage2.jpg"; 

const SpanOfServices2 = () => {
  return (
    <div className="spanServicesContainer">
      <h2 className="servicesTitle">Span of services</h2>
      
      <div className="servicesContent">
        {/* Left Image Section */}
        <div className="servicesImage">
          <img src={ServiceImage} alt="HR Services" />
               {/* Buttons */}
               <div className="servicesButtons">
            <PrimaryButton text="Explore More" className="exploreButton" />
            <DefaultButton text="Get Started" className="getStartedButton" />
          </div>
        </div>

        {/* Right Text Section */}
        
        <div className="servicesText">
          <h3 className="servicesHeading">
            Empowering Unit HR teams for Seamless Employee Life Event Management
          </h3>
          <p className="servicesDescription">
          Employee data processing, update, and data health reporting for Hire to Retire lifecycle,
          ensuring efficiency, compliance with service level agreements, quality,
          and data security standards.
          </p>
          <p className="servicesDescription">
          Our Key Account Managers offer strong HR Operation Support across 12 processes, 
          facilitating hassle-free completion of Business as Usual and Special Requests, 
          enabling you to focus on HR priorities.
          </p>
        </div>
        
      </div>

      {/* Navigation Arrows */}
      <IconButton 
        iconProps={{ iconName: "ChevronLeft" }} 
        className="navArrow leftArrow" 
        title="Previous"
      />
      <IconButton 
        iconProps={{ iconName: "ChevronRight" }} 
        className="navArrow rightArrow" 
        title="Next" 
        style={{ color: 'black'}}
        />
    </div>
  );
};
export default SpanOfServices2;
