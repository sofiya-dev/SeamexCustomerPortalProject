
import React from "react";
import { Stack, Text, DefaultButton } from "@fluentui/react";
import "./../styles/Header&Bannar.css"; 

const SeamexBannar = () => {
  return (
    <main className="seamexMain">
      <Stack horizontalAlign="center" className="contentWrapper">
        <img className="seamaxBannar" src={require('../assets/HomeBanner.gif')}/>
        
      </Stack>
    </main>
  );
};

export default SeamexBannar;  
