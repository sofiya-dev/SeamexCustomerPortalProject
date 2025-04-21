
import React from "react";
import { Stack, Text, DefaultButton } from "@fluentui/react";
import "./../styles/PrivacyNoticeBanner.css"; 

const PrivacyNoticeBanner = () => {
  return (
    <main className="privacyNoticeMain">
      <Stack horizontalAlign="center" className="NoticeWrapper">
        <img className="privacyNoticeBanner" src={require('../assets/PrivacyNoticeBannerImage.png')} alt="Privacy Notice Banner"/>
         
    
        </Stack>
    </main>
    );
 };
        
export default PrivacyNoticeBanner;