
import React from "react";
import { Stack, Text, DefaultButton } from "@fluentui/react";
import "./../styles/Header&Banner.css"; 

const SeamexBanner = () => {
  return (
    <main className="seamexMain">
      <Stack horizontalAlign="center" className="contentWrapper">
        <img className="seamaxBanner" src={require('../assets/HomeBanner.gif')}/>
        
      </Stack>
    </main>
  );
};

export default SeamexBanner;  
