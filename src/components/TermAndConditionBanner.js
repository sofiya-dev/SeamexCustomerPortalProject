
import React from "react";
import { Stack, Text, DefaultButton } from "@fluentui/react";
import "./../styles/TermAndConditionBanner.css"; 

const TermAndConditionBanner = () => {
  return (
    <main className="conditionMain">
      <Stack horizontalAlign="center" className="conditionWrapper">
        <img className="conditionBanner" src={require('../assets/Term&ConditionImage.png')}/>
        

        <Text className="conditionText">
          By Accessing The Services, You Agree To Be Bound By These Terms.
           If You Do Not Agree To These Terms, Do Not Use The Services And Notify Your HR Immediately.
        </Text>

{/* Introduction Section */}
<Stack horizontal className="introContainer">
          <img
            className="introIcon"
            src={require('../assets/IntroductionIcon.png')}
            alt="Introduction Icon"
          />
          <Stack>
            <Text className="introTitle">Introduction</Text>
            <Text className="introDescription">
              The Services are being provided to you for the purposes related to provide visibility into the leadership team,
              fostering trust with customers, Help you to connect with the individuals leading Seamex’s services,
              Show accountability by highlighting the people responsible for key business functions and ensure customers know who
              to contact for specific concerns or escalations. The Services may require an internet connection and may collect,
              store, and process your personal data.
            </Text>
          </Stack>
        </Stack>

      </Stack>
    </main>
  );
};

export default TermAndConditionBanner;