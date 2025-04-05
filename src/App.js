
import React from "react";
import Header from "./components/Header";
import Bannar from "./components/Bannar";

import SpanOfServices from "./components/SpanOfServices";
// import SpanOfServices2 from "./components/SpanOfServices2";
// import SpanOfServices3 from "./components/SpanOfServices3";
// import SpanOfServices4 from "./components/SpanOfServices4";
import DigitalProducts from "./components/DigitalProducts";

import OurDashboard from "./components/OurDashboard";
import Footer from "./components/Footer";
import { ProjectWins } from "./components/ProjectWins";


function App() {
  return (
    <div className="App">
      <Header/>
      <Bannar/>
      {/* <SeamexHome /> */}
        <DigitalProducts/>
          <SpanOfServices/>
         {/* <SpanOfServices2/> 
      <SpanOfServices3/>
      <SpanOfServices4/> */}

      <OurDashboard/>
<ProjectWins/>
      <Footer/>
    </div>
  );
}

export default App;

