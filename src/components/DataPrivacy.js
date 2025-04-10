import React from 'react';
import './../styles/DataPrivacy.css';
import { Stack, Text } from '@fluentui/react';

const DataPrivacy = () => {
  return (
    <div className="dataPrivacyContainer">
      <Stack horizontalAlign="center" className="dataPrivacyContent">
        <Text variant="large" className="subtitle">Get To Know Our</Text>
        <div className="dataPrivacyHeading">
          <span className="dataHeading">Data</span>
          <span className="privacyHeading">Privacy</span>
        </div>
        <Text className="dataPrivacyDescription">
          Data privacy is paramount in today's world. At SEAMEX, we take this responsibility seriously, understanding its impact on our workforce, stakeholders and reputation.
        </Text>
      </Stack>

{/* Privacy Blocks Section */}
<div className="privacyBlocks">
        <div className="privacyCard">
          <h3 className= "privacyCardHeading">A Vast Footprint/Secure Foundation:</h3>
          <span className="subDescription">
            As data controller for 187,000 ABG employees and processor for 18 businesses across 39 countries,
            we manage a vast amount of personal data. This demands robust data security, risk management, and
            compliance measures.
          </span>
        </div>
        <div className="privacyCard">
          <h3 className= "privacyCardHeading">Embracing Global Standards, Achieving Recognition</h3>
          <span className="subDescription">
            SEAMEX has embraced global standards like GDPR and the DPDP Act 2023. In 2021, we embarked on a
            privacy initiative, earning prestigious ISO certifications for data protection. Our commitment
            has garnered stakeholder recognition and finalist status in the DSCI Excellence Awards & won
            Privacy Champion Award 2023 at India Data Protection Summit.
          </span>
        </div>
        <div className="privacyCard">
          <h3 className= "privacyCardHeading">A Journey of Transformation:</h3>
          <span className="subDescription">
            Compliance ratings have skyrocketed from 20% to 100% within two years! We're constantly evolving,
            aiming for the highest maturity levels. This dedication has led to innovative reporting, privacy
            by design practices, and comprehensive policies.
          </span>
        </div>
        <div className="closingStatement">
          <span className="description1">
            By upholding these values, SEAMEX strengthens trust, reputation, and business growth, positioning ourselves as a leader in data privacy compliance.
          </span>
          <span className="description2">
            We are prepared for the DPDP Act 2023 and beyond, committed to protecting data and fostering a secure, trusted environment for all.
          </span>
        </div>
      </div>

    </div>
  );
};

export default DataPrivacy;
