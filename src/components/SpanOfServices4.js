import React from "react";
import { PrimaryButton, DefaultButton, IconButton } from "@fluentui/react";
import "./../styles/SpanOfServices4.css";
import ServiceImage from "../assets/ServiceImage4.jpg"; 

const SpanOfServices4 = () => {
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
          Partnering with Group HR Centre of Excellence
          </h3>
          <p className="servicesDescription">
            <span>
            <strong>Build-deploy, operate: </strong>
            maintain services to deliver tech and digitally enabled 
            employee value proposition and group policies.
            </span>
          </p>
          <p className="servicesDescription">
            <span><strong>End to end Process: </strong>
            Tech services for Group Processes across Potential 
            Assessment, ACR, Performance, GMLP, Pratibha, and AWOO with our dedicated team.
            </span>
        </p>

           <p className="servicesDescription">
            We facilitate strong partnerships between businesses and the Group HR teams.
           </p>
           <p className="servicesDescription">
           Our Business Relationship Managers offer strong support, facilitating hassle-free 
           completion of Special Projects, enabling you to focus on strategic.
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
export default SpanOfServices4;
