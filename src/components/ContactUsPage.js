// src/components/ContactUsPage.js
import React from 'react';
import './../styles/ContactUsPage.css';
import mapImage from '../assets/ContactUsMapImage.png';

const ContactUsPage = () => {
  return (
    <div className="contactUsContainer">
    
      <div className="fullWidthHeading">
        <span>Choose your mode of communication to reach out to Us:</span>
      </div>

      {/* Left + Right Side */}
      <div className="contactContent">
        {/* Left Side */}
        <div className="contactLeft">
          <div className="contactSection">
            <span className='header2'>
              Click on AVA or write to us on{' '}
              <a
                href="mailto:seamex.brm@adityabirla.com"
                className="highlightLink"
              >
                seamex.brm@adityabirla.com
              </a>
            </span>
            <br />
            <span className='header2'>
              or call our Contact Center on{' '}
              <span className="highlightPhone">+91 806–929–0700</span>
            </span>
          </div>

          <div >
            <span className="sectionTitle">
              Our contact center is available from:
            </span>
            <br />
            
            <span className='details'>
              Monday to Friday, 8:00 AM to 8:00 PM (IST).
             </span>
            <br />
            <span className='details'>Saturdays 9:00 AM to 6:00 PM (IST).
            </span>
          </div>

          <hr className="divider" />

          <div className="contactSection">
            <span className="sectionTitle">Visit our office :</span>
            <br />
            <span className='header2'>Seamex, BMCSPL</span>
            <br />
            <span className='details'>
              1401, 14th Floor, Empire Tower, Reliable Tech Park, Thane–Belapur
              Road, MIDC, Navi Mumbai – 400 708.
            </span>
          </div>

          <hr className="divider" />

          <div className="contactSection">
            <span className="sectionTitle">Find us on Google Maps:</span>
            <br />
            <a
              href="https://maps.app.goo.gl/gg5VkxbZw1ZekujX9"
              target="_blank"
              rel="noopener noreferrer"
              className="mapLink"
            >
              https://maps.app.goo.gl/gg5VkxbZw1ZekujX9
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contactRight">
          <div className="mapWrapper">
            <img src={mapImage} alt="Global map showing Mumbai" className="mapImg" />
            <div className="mapFooterText">
              Servicing Aditya Birla Group globally.{' '}
              <span className="mumbaiHighlight">Based in Mumbai.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
