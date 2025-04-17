
import React from "react";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";

import SpanOfServices from "./components/SpanOfServices";
// import SpanOfServices2 from "./components/SpanOfServices2";
// import SpanOfServices3 from "./components/SpanOfServices3";
// import SpanOfServices4 from "./components/SpanOfServices4";

import DigitalProducts from "./components/DigitalProducts";

import OurDashboard from "./components/OurDashboard";
import Footer from "./components/Footer";
import { ProjectWins } from "./components/ProjectWins";
import ContactUsPage from "./components/ContactUsPage";
import ContactUsBanner from "./components/ContactUsBanner";
import AboutUsBase from "./components/AboutUS/AboutUsBase";
import MissionVision from "./components/MissionVision";
import OurScope from "./components/OurScope";
import OurTeam from "./components/OurTeam";
import DigitalTransformation from "./components/DigitalTransformation";
import CommitmentToExcellence from "./components/CommitmentToExcellence";
import CultureOfContinuousImprovement from "./components/CultureOfContinuousImprovement";
import VisionFuture from "./components/VisionFuture";
import VisionFutureStrip from "./components/VisionFutureStrip";
import DataPrivacy from "./components/DataPrivacy";
import SeamexProjectWins from "./components/SeamexProjectWins";

import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyNoticeBanner from "./components/PrivacyNoticeBanner";
import PrivacyNotice from "./components/PrivacyNotice";



function App() {
  return (
    <div className="App">
      <Header/>
      <HomeBanner/>
    
        <DigitalProducts/>
        
          <SpanOfServices/>
         {/* <SpanOfServices2/> 
      <SpanOfServices3/>
      <SpanOfServices4/> */}

      <OurDashboard/>
<ProjectWins/>

<AboutUsBase/>

<OurScope/>
<OurTeam/>
<DigitalTransformation/>
<CommitmentToExcellence/>
<CultureOfContinuousImprovement/>
<VisionFuture/>

<VisionFutureStrip/>

<MissionVision/>

<DataPrivacy/>

<SeamexProjectWins/>

<PrivacyNoticeBanner/>
<PrivacyNotice/>

<TermsAndCondition/>

<ContactUsBanner/>
<ContactUsPage/>
      <Footer/>
    </div>
  );
}

export default App;

