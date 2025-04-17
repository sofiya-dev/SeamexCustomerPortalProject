import React from 'react';
import { Text } from '@fluentui/react';
import './../styles/PrivacyNotice.css';

const PrivacyNotice = () => {
    return (
      <div className="privacyNoticeWrapper">
        <h1 className="overviewTitle">Overview</h1>
  
        <p className="paragraphText1">
          This platform is available to entities within the aditya birla group including but not limitted to the companies listed on <br/>
          <span className="redLink">http://www.aditya birla group.com//businesses.</span>
          This Privacy Notice (“Privacy Notice”) describes how we collect, store, use, disclose and process your personal data as
          the end user of the Seamex customer portal and tells you about your privacy rights.
        </p>
  
        <p className="paragraphText2">
          Please Read This Privacy Notice In Detail Before You Start Using The Services.
        </p>
  
        {/* Changes to the Privacy Notice */}
        <h2 className="sectionHeading">
          Changes to the <span className="redBold">Privacy Notice</span>
        </h2>
  
        <p className="paragraphText1">
          We review and update this Privacy Notice from time to time. When we do, we will note the date of the version on the Privacy Notice and post it on this website. <br />
          You can tell when we last updated this Privacy Notice by checking the “Last Updated” date at the top of this Privacy Notice.
          You also may obtain historical versions of this Privacy Notice by contacting us.
        </p>
  
        {/* What Data We Collect About You */}
        <h2 className="sectionHeading">
          <span className="redBold">What Data</span> We Collect About You
        </h2>
  
        <p className="paragraphText1">
          Personal data, or personal information, means any information about an individual from which that individual can be identified.
          It does not include data where the identity has been removed (anonymous data). The collection of data includes:
        </p>
  
        <ol className="dataListNumbered">
        <li>Names</li>
         <li>Photographs of key Seamex stakeholders, other relevant function heads.</li>
        </ol>

        {/* Why We Collect Your Data */}
      <section>
        <Text className="sectionHeading">
          <span className="redBold">Why We</span> Collect Your Data
        </Text>
        <p className="paragraphText1">
          We process your personal data for the following purposes:
        </p>
        <ul className="bulletList">
          <li>Enhance Transparency : Provide visibility into the leadership team, fostering trust with customers.</li>
          <li>Build Familiarity : Help customers connect with the individuals leading Seamex’s services.</li>
          <li>Strengthen Credibility : Show accountability by highlighting the people responsible for key business functions.</li>
          <li>Facilitate Communication : Ensure customers know who to contact for specific concerns and their requirements.</li>
        </ul>
      </section>

      {/* How We Collect Your Data */}
      <section>
        <Text className="sectionHeading">
          <span className="redBold">How We</span> Collect Your Data
        </Text>
        <p className="paragraphText1">
          Data is collected and has already been incorporated into the portal. Relevant stakeholders were informed during the development of this platform to ensure transparency and consent in the data collection process.
        </p>
        <ul className="bulletList">
          <li> Grounds of Processing
                <p>We will only use your personal data when the law allows us to. Most commonly, 
                    we will use your personal data in any of the following circumstances:</p>
              <li>Where we have a legitimate interest to process your personal data for purposes related to connect with customers for specific concerns and their requirements.</li>
              <li>For fulfilling a legal obligation</li>
              <li>Pursuant to any other legitimate uses prescribed under the applicable data privacy law.</li>
          </li>
        </ul>
      </section>

      {/* Disclosure Section */}
      <section>
        <Text className="sectionHeading">
          Who Do <span className="redBold">We Disclose</span> Your Data To
        </Text>
        <p className="paragraphText1">
          We may have to share your personal data with the parties set out below for the purposes set out in the table above.
        </p>
        <ul className="bulletList">
          <li>Other entities in the Aditya Birla Group.</li>
          <li>Professional advisors, government/regulatory authorities and other parties as required under the applicable law.</li>
          <li>Third parties who are involved in development of this platform</li>
        </ul>
        <p className="paragraphText1">
          The Company requires all third parties to respect the security of your personal data and to treat it in accordance with the law.
          We do not allow our third-party service providers to use your personal data for their own purposes. 
          We only permit them to process your personal data for specified purposes and in accordance with our instructions unless the applicable law permits otherwise.
        </p>
      </section>

        {/* How We Protect Your Data */}
      <h2>How <span className="redBold">We Protect</span> Your Data</h2>
      <p className="paragraphText1">The Company has put in place appropriate security measures to prevent accidental loss or 
        unauthorized access, use, alteration or disclosure of your personal data. Moreover, we limit access of your personal data only 
        to those employees, agents, contractors and other third parties who have a business need to know. They are only permitted to 
        process your personal data on our instructions and are subject to a duty of confidentiality.</p>
      <p className="paragraphText1">You are responsible for maintaining the security of your account credentials and other 
        authentication involved in obtaining access to password-protected secure areas of the Services. 
        The Company will treat access to the Services through your account credentials as having been authorized by you. 
        We shall bear no liability in respect of such unauthorized use of your account. Unauthorized access to password-protected or 
        secure areas is prohibited and may lead to prosecution under the applicable laws. We may suspend your use of all or 
        part of the Services without notice if we suspect or detect any breach of security. 
        If you believe that information you provided to us is no longer secure, please notify us immediately using 
        the contact information provided below.</p>

      {/* How Long We Retain Your Data */}
      <h2>How Long <span className="redBold">We Retain</span> Your Data</h2>
      <p className="paragraphText1">We retain the personal data collected or otherwise processed by us.</p>
      <ul className="romanList">
        <li>(i) for as long as necessary to fulfill the purposes for which you provided the information.</li>
        <li>(ii) for the purposes of satisfying any legal/regulatory, accounting, or reporting obligations.</li>
        <li>(iii) to resolve disputes.</li>
        <li>(iv) for such other purposes as are permitted under applicable law.</li>
      </ul>
      <p className="paragraphText1">To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements that may require or permit retention for a longer duration.</p>
   

    {/* What Are Your Rights & Duties */}
<h2>What Are Your <span className="redBold">Rights & Duties</span></h2>
<ul className="customBullets">
  <li>
    <strong className="subHeading1">Your Legal Rights</strong>
    <p className="paragraphText3">
      The rights available to you with respect to your personal data may differ based on your geographic location.
      You may contact us for more information on the specific rights applicable to you. Following are some of the rights 
      prescribed under various laws:
    </p>
    </li>
    </ul>
    <ul className="customBullets1">
      <li>
        <strong className="subHeading">Right to Access :</strong> You may request a summary of your personal data available in our records,
        the identities of other parties that we have shared your personal data with and any other information
        that may be prescribed under the applicable law.
      </li>
      <li>
        <strong className="subHeading">Right to Correct or Erase :</strong> You may request us to correct, complete, update or erase 
        your personal data from our records.
      </li>
      <li>
        <strong className="subHeading">Right to Withdraw Consent :</strong> Where we have taken your consent to process your personal data,
        you have the right to withdraw such consent. However, in certain cases we may not be able to continue
        providing you with access to our Services or certain parts of it, if we cannot process the personal data
        essential for enabling the provision of such Services. We will inform you if that is the case.
      </li>
      <li>
        <strong className="subHeading">Right to Object :</strong> If you are a resident of the EU or the UK, you may also have the right to object
        to the processing of your personal data if you believe it impacts your fundamental rights and freedoms.
      </li>
      <li>
        <strong className="subHeading">Right of Grievance Redressal :</strong> Under the Digital Personal Data Protection Act, 2023 of India (“DPDPA”),
        you have the right to register a grievance with us with respect to the processing of your personal data.
      </li>
      <li>
        <strong className="subHeading">Right to Nominate :</strong> The DPDPA also gives you the right to nominate any other individual to exercise
        your rights under the DPDPA in the event of your incapacity or death.
  
    
    <p className="paragraphText3">
  Please note that some of the above rights may be subject to certain exemptions under the applicable data protection law.</p>

    <p className="paragraphText3">
  If you wish to exercise any of the above rights, you may contact us at Address:{" "}
  <span className="redBold">
    Unit No. SB-1401, C–Wing – 14th floor, Empire Tower, Reliable Tech Park Off Thane–Belapur Road, Airoli, Navi Mumbai 400 708 .
  </span>
</p>

<p className="paragraphText3">
  Email id: <span className="redBold">dataprivacy.central@adityabirla.com</span>
</p>

<p className="paragraphText3">
  You also have the right to lodge a complaint with the relevant data protection authority in your country, if you believe we have violated any of your rights.
</p>

<ul className="customBullets">
  <li>
    <strong className="subHeading1">Your Duty to Inform Us of Changes</strong>
    <p className="paragraphText4">
      It is important that the personal data we hold about you is accurate and current. Whenever there is a change,
      you must promptly make the changes by logging into your account on the mobile application or website.
      We will rely on the information made available by you to us.
    </p>
  </li>
</ul>
</li>
</ul>
      </div>
    );
  };
  
  export default PrivacyNotice;
  