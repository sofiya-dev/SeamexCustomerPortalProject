
import React from "react";
import { Stack, Text, DefaultButton } from "@fluentui/react";
import "./../styles/ContactUsBanner.css"; 

const ContactUsBanner = () => {
  return (
    <main className="contactMain">
      <Stack horizontalAlign="center" className="contentWrapper">
        <img className="contactBanner" src={require('../assets/ContactUsBanner.png')}/>
        
      </Stack>
    </main>
  );
};

export default ContactUsBanner;