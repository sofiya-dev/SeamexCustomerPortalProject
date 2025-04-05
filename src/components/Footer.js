import React from "react";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        {/* Left Section - Logo and Description */}
        <div className="footerSection1">
          <div className="footerLogo">
          <img className="footerLogoImg" src= {require('../assets/LogoForFooter.png')} />
          </div>
          <p className="footerDescription">
            Welcome to Seamex, the Aditya Birla Group’s HR Shared Services & Technology Center.
            Since inception on November 14, 2017, we have been at the forefront of consolidating HR operations 
            and transforming employee experience, with contemporary technology solutions across multi-cloud platforms.
          </p>
        </div>

        {/* About Us Section */}
        <div className="footerSection2">
          <h3 className="textTitle">About Us</h3>
          <ul>
            <li>Mission</li>
            <li>Vision</li>
            <li>Meet the Team</li>
            <li>Data Privacy</li>
            <li>Awards And Certification</li>
            <li>Project Highlights - Wins</li>
            <li>Privacy Notice</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="footerSection3">
          <h3 className="textTitle">Our Services</h3>
          <ul>
            <li>HR Processes</li>
            <li>HR Technology</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footerSection4">
          <h3 className="textTitle">Contact Us</h3>
          <p><strong>Address</strong><br />
            Seamex, BMCSPL 1401, 14th Floor, Empire Tower, Reliable Tech Park, Thane-Belapur Road, MIDC, Navi Mumbai – 400 708
          </p>
          <p><strong>Contact Centre Number</strong><br />
            80-6929-0700
          </p>
          <p><strong>Find us on Google Maps</strong><br />
            <a href="https://maps.app.goo.gl/gg5VkbZw1ZekujX9" target="_blank" rel="noopener noreferrer">
            https://maps.app.goo.gl/gg5VkbZw1ZekujX9
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
