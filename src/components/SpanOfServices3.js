
import React from "react";
import { PrimaryButton, DefaultButton, IconButton } from "@fluentui/react";
import "./../styles/SpanOfServices3.css";
import ServiceImage from "../assets/ServiceImage3.png"; 

const SpanOfServices3 = () => {
  return (
    <div className="spanServicesContainer">
      <h2 className="servicesTitle">Span of services</h2>
      
      <div className="servicesContent">
        {/* Left Text Section */}
        <div className="servicesText">
          <h3 className="servicesHeading">
            Empowering Business teams for Process, Tech and Digital
          </h3>
          <p className="servicesDescription">
            <span>We specialize in supporting businesses throughout their lifecycle:</span>
          </p>
          <p className="servicesDescription">
          <span>
            <strong>For Established Enterprises: </strong>
            From standard to customized, 
            we leverage the contemporary tech solution to fulfil new development requests.
            </span> 
          </p>
          <p className="servicesDescription">
            <span>
                <strong>For Startups and Growth-Stage Businesses: </strong>
          We provide extensive support, 
          from initial data setup to managing employee data and dynamic requirements of rapidly growing ventures.
          </span>
          </p>
          <p className="servicesDescription">
            <span>
                <strong>For Merger, Acquisitions, Divestment: </strong>
            
            From carve-in of acquired entities, creating data setups to carve out and data purging of divested entities, 
            we carry tacit knowledge and expertise to cater to high-priority and critical data.
            </span>
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

export default SpanOfServices3;
