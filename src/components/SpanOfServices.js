import React from "react";
import { PrimaryButton, DefaultButton, IconButton } from "@fluentui/react";
import "./../styles/SpanOfServices.css";
import ServiceImage from "../assets/ServiceImage1.jpg"; 

const SpanOfServices = () => {
  return (
    <div className="spanServicesContainer">
      <h2 className="servicesTitle">Span of services</h2>
      
      <div className="servicesContent">
        {/* Left Text Section */}
        <div className="servicesText">
          <h3 className="servicesHeading">
            Empowering Business HR CoEs for Seamless Employee Data Management
          </h3>
          <p className="servicesDescription">
            Business Specific Practices, approvals, checks and balances, HR process health reporting, 
            enabling workflows, ensuring efficiency, accuracy, compliance with service level agreements, 
            quality and data security standards.
          </p>
          <p className="servicesDescription">
            Our Business Relationship Manager offers strong support across 17 HR processes, 
            facilitating haste-free completion of business as Usual and Special Project, 
            enabling you to focus on strategic priorities.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="servicesImage">
          <img src={ServiceImage} alt="HR Services" />
               {/* Buttons */}
               <div className="servicesButtons">
            <PrimaryButton text="Explore More" className="exploreButton" />
            <DefaultButton text="Get Started" className="getStartedButton" />
          </div>
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

export default SpanOfServices;
