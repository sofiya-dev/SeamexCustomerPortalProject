// src/components/ContactUsPage.js
import React from 'react';
import './../styles/ContactUsPage.css';
import mapImage from '../assets/ContactUsMapImage.png';

const ContactUsPage = () => {
  return (
    <div className="contact-us-container">
      {/* Full-width heading */}
      <div className="full-width-heading">
        <span>Choose your mode of communication to reach out to Us:</span>
      </div>

      {/* Left + Right Side */}
      <div className="contact-content">
        {/* Left Side */}
        <div className="contact-left">
          <div className="contact-section">
            <span>
              Click on AVA or write to us on{' '}
              <a
                href="mailto:seamex.brm@adityabirla.com"
                className="highlight-link"
              >
                seamex.brm@adityabirla.com
              </a>
            </span>
            <br />
            <span>
              or call our Contact Center on{' '}
              <span className="highlight-phone">+91 806–929–0700</span>
            </span>
          </div>

          <div >
            <span className="section-title">
              Our contact center is available from:
            </span>
            <br />
            <span className='contactDetails'>Monday to Friday, 8:00 AM to 8:00 PM (IST).</span>
            <br />
            <span className='contactDetails'>Saturdays 9:00 AM to 6:00 PM (IST).</span>
          </div>

          <hr className="divider" />

          <div className="contact-section">
            <span className="section-title">Visit our office :</span>
            <br />
            <span>Seamex, BMCSP</span>
            <br />
            <span className='contactDetails'>
              1401, 14th Floor, Empire Tower, Reliable Tech Park, Thane–Belapur
              Road, MIDC, Navi Mumbai – 400 708.
            </span>
          </div>

          <hr className="divider" />

          <div className="contact-section">
            <span className="section-title">Find us on Google Maps:</span>
            <br />
            <a
              href="https://maps.app.goo.gl/gg5VkxbZw1ZekujX9"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              https://maps.app.goo.gl/gg5VkxbZw1ZekujX9
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <div className="map-wrapper">
            <img src={mapImage} alt="Global map showing Mumbai" className="map-img" />
            <div className="map-footer-text">
              Servicing Aditya Birla Group globally.{' '}
              <span className="mumbai-highlight">Based in Mumbai.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
