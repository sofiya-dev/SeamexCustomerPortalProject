import React from "react";
import { PrimaryButton } from "@fluentui/react";
import "./../styles/OurDashboard.css";
import dashboardImage from "../assets/OurDashboardImage.png";

const OurDashboard = () => {
  const handleViewDashboard = () => {
    alert("Navigating to the Dashboard!");
  };

  return (
    <div className="dashboardContainer">
      <h1 className="ms-font-xxl">Our Dashboard</h1>
        <div className="dashboardContent"
         style={{ backgroundImage: `url(${dashboardImage})` }}
        >
          {/* Left Section */}
          <div className="dashboardLeft">
            <h2 className="ms-font-xl">Attrition</h2>
            <p>
              Data for voluntary and involuntary reasons for Attrition to track
              and analyze employee turnover within an organization
              systematically.
            </p>

            <h2 className="ms-font-xl">Position Dashboard</h2>
            <p>
              Overview on the position distribution as well as insights into the
              fidelity of the position report across business.
            </p>

            <h2 className="ms-font-xl">Clear the Pathway Analysis</h2>
            <p>
              Monitor and analyze employee career progression within an
              organization, identifying instances of lack of growth or
              advancement.
            </p>

            <h2 className="ms-font-xl">
              Young Talent Management (YTM) Analysis
            </h2>
            <p>
              Consolidated view of ABGLP & ELP demographics to the key
              stakeholders along with clear insights on attrition & movement
              analysis.
            </p>
            {/* Button */}
            <PrimaryButton
              className="dashboardButton"
              onClick={handleViewDashboard}
            >
              View Dashboard
            </PrimaryButton>
          </div>

          {/* Right Section */}
          <div className="dashboardRight">
            <h2 className="ms-font-xl">Movement Analysis Dashboard</h2>
            <p>
              Insights about the fungibility of talent and the degree to which
              employee movements are happening within the organization and
              focuses on 2*2*2 movement.
            </p>

            <h2 className="ms-font-xl">Career Velocity & Hiring Dashboard</h2>
            <p>
              Metrics to measure career velocity of Talents & Non Talents,
              internal and external hire across business.
            </p>

            <h2 className="ms-font-xl">Leadership Scorecard</h2>
            <p>
              Leadership scorecard provides metrics to measure the overall
              health of Talent Management.
            </p>

            <h2 className="ms-font-xl">Gender Diversity Dashboard</h2>
            <p>
              Provides metrics to understand Gender diversity across
              organizations.
            </p>
          </div>
        </div>
    </div>
  );
};

export default OurDashboard;


