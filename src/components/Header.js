
import React from "react";
import "./../styles/Header&Bannar.css"; 

const Header = () => {
  return (
    <header className="seamexHeader">
      <div className="headerLogo">
        <img className =" headerLogoImg" src={require('../assets/Seamex_logo.png')} />
      </div>
      <nav className="navBar">
        <ul>
          <li>Home</li>
          <li>Our Services</li>
          <li>About Us</li>
          <li>Dashboard</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
