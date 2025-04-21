
import React from "react";
import { Stack, Text, DefaultButton } from "@fluentui/react";
import "./../styles/TermsAndCondition.css"; 

const TermsAndCondition = () => {
  return (
    <main className="conditionMain">
      <Stack horizontalAlign="center" className="conditionWrapper">
        <img className="conditionBanner" src={require('../assets/Term&ConditionImage.png')}/>
        

        <Text className="conditionText">
          By Accessing The Services, You Agree To Be Bound By These Terms.
           If You Do Not Agree To These Terms, Do Not Use The Services And Notify Your HR Immediately.
        </Text>

{/* Introduction */}
<div className="sectionContainer">
        <img src={require('../assets/IntroductionIcon.png')} alt="Introduction Icon" className="sectionIcon" />
        <div className="sectionContent">
          <h3 className="sectionTitle">Introduction</h3>
          <p className="sectionDescription">
          The Services are being provided to you for the purposes related to provide visibility into the leadership team, fostering trust with customers, 
          Help you to connect with the individuals leading Seamex’s services, Show accountability by highlighting the people responsible for key business functions 
          and ensure customers know who to contact for specific concerns or escalations. 
          The Services may require an internet connection and may collect, store, and process your personal data.  </p>
        </div>
      </div>

      {/* License */}
      <div className="sectionContainer">
        <img src={require('../assets/LicenseIcon.png')} alt="License Icon" className="sectionIcon" />
        <div className="sectionContent">
          <h3 className="sectionTitle">License</h3>
          <p className="sectionDescription">
          We grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Services for your personal, 
          non-commercial use only, subject to these Terms and any applicable laws and regulations. You may not copy, modify, distribute, sell, 
          rent, lease, sublicense, or otherwise transfer the Services or any part of it to anyone else. You may not reverse engineer, decompile, 
          disassemble, or otherwise attempt to derive the source code of the Services or any part of it. You may not use the Services for any illegal, 
          immoral, or unauthorized purpose. You may not interfere with or disrupt the operation of the Services or any servers or networks connected to it. 
          You may not use the Services in a way that may harm, offend, or infringe the rights of any other person or entity. 
          </p>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="sectionContainer">
        <img src={require('../assets/PrivacyNoticeIcon.png')} alt="Privacy Icon" className="sectionIcon" />
        <div className="sectionContent">
          <h3 className="sectionTitle">Privacy Notice</h3>
          <p className="sectionDescription">
          We own and retain all the requisite rights, title, and interest in and to the Services and all related content, software, 
          code, graphics, logos, trademarks, and other intellectual property rights. Nothing in these Terms grants you any right, title, 
          or interest in or to the Services or any part of it, except for the limited license granted to you above. 
          You may not use our name, logo, trademark, or any other mark or identifier without our prior written consent. 
          You may not remove, alter, or obscure any copyright, trademark, or other proprietary notice from the Services or any part of it.
          </p>
        </div>
      </div>

      {/* Disclaimer of Warranties */}
      <div className="sectionContainer">
        <img src={require('../assets/DisclaimerIcon.png')} alt="Disclaimer Icon" className="sectionIcon" />
        <div className="sectionContent">
          <h3 className="sectionTitle">Disclaimer of Warranties</h3>
          <p className="sectionDescription">
          The Services are provided "as is" and "as available" without any warranties of any kind, either express or implied. 
          To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to warranties of merchantability, 
          fitness for a particular purpose, title, and non-infringement. We do not warrant that the Services will be uninterrupted, error-free, 
          secure, or free of viruses or other harmful components. We do not warrant that the Services will meet your requirements or expectations 
          or that the results obtained from the Services will be accurate, reliable, or satisfactory. We do not warrant that any defects or errors in the Services will be corrected. 
          You use the Services at your own risk and discretion and you are solely responsible for any damage or loss that may result from your use of the Services.</p>
        </div>
      </div>

      {/* Limitation of Liability */}
      <div className="sectionContainer">
        <img src={require('../assets/LiabilityIcon.png')} alt="Liability Icon" className="sectionIcon" />
        <div className="sectionContent">
          <h3 className="sectionTitle">Limitation of Liability</h3>
          <p className="sectionDescription">
          To the fullest extent permitted by law, we will not be liable for any direct, indirect, incidental, special, consequential, or 
          exemplary damages, including but not limited to damages for loss of profits, revenue, data, goodwill, or other intangible losses, 
          arising out of or in connection with your use of or inability to use the Services, even if we have been advised of the possibility of such damages.
          </p>
        </div>
      </div>

      {/* Indemnification */}
      <div className="sectionContainer">
        <img src={require('../assets/IndemnificationIcon.png')} alt="Indemnification Icon" className="sectionIcon" />
        <div className="sectionContent">
          <h3 className="sectionTitle">Indemnification</h3>
          <p className="sectionDescription">
          You agree to indemnify, defend, and hold harmless, the Aditya Birla Group companies (including us) and their respective directors, 
          officers, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, 
          and fees (including reasonable attorneys' fees) arising out of or in connection with your use of or access to the Services, 
          your breach or violation of these Terms or the applicable laws, or your infringement or violation of any rights of any third party. 
          </p>
        </div>
      </div>

      {/* Termination */}
      <div className="sectionContainer">
        <img src={require('../assets/TerminationIcon.png')} alt="Termination Icon" className="sectionIcon" />
        <div className="sectionContent">
          <h3 className="sectionTitle">Termination</h3>
          <p className="sectionDescription">
          We may terminate your access to and use of the Services at any time, for any reason, and without notice, 
          in our sole discretion. We may also modify, suspend, or discontinue the Services or any part of it at any time, 
          for any reason, and without notice, in our sole discretion. Upon termination, your license to use the Services will 
          automatically cease and you will lose all data and content associated with the Services. The provisions of these 
          Terms that by their nature should survive termination will survive termination, including but not limited to the sections on, 
          Privacy Notice, Intellectual Property Rights, Limitation of Liability, Indemnification, Governing Law and Jurisdiction. 
          </p>
        </div>
      </div>

      {/* Jurisdiction */}
      <div className="sectionContainer">
        <img src={require('../assets/JurisdictionIcon.png')} alt="Jurisdiction Icon" className="sectionIcon" />
        <div className="sectionContent">
          <h3 className="sectionTitle">Governing Law and Jurisdiction</h3>
          <p className="sectionDescription">
          These Terms and your use of the Services will be governed by and construed in accordance with Indian laws. 
          You agree to submit to the exclusive jurisdiction and venue of the courts of Mumbai, India, for any dispute 
          arising out of or in connection with these Terms or the Services.
          </p>
        </div>
      </div>

      {/* Terms Updates */}
      <div className="sectionContainer">
        <img src={require('../assets/TermsOfUseIcon.png')} alt="Terms Icon" className="sectionIcon" />
        <div className="sectionContent">
          <h3 className="sectionTitle">Changes to the Terms of Use</h3>
          <p className="sectionDescription">
          We may change, modify, or update these Terms at any time and at our sole discretion. 
          We will notify you of any changes by posting the updated Terms on the Services or via any other form of notification. 
          Your continued use of the Services after any such changes constitutes your acceptance of the new Terms. 
          You should review these Terms periodically to ensure that you are aware of and agree with the current Terms. 
          If you do not agree to the Terms, do not use this Services. 
          </p>
        </div>
      </div>

{/* Contact Information Section */}
<div className="sectionContainer">
          <img
            className="sectionIcon"
            src={require('../assets/ContactInfoIcon.png')}
            alt="Icon"
          />
         <div className="sectionContent">
         <h3 className="sectionTitle">Contact Information </h3>
         <p className="sectionDescription">
            <>
             In case of any questions related to these Terms or the Services, please contact us at Address:{" "}
             <span className="highlightText">
              Unit No. SB–1401, C–Wing – 14th floor, Empire Tower, Reliable Tech<br />
              Park Off Thane–Belapur Road, Airoli, Navi Mumbai 400 708
              </span><br /><br />
               Email id: <span className="highlightText">dataprivacy.central@adityabirla.com</span>
            </>
            </p>
          </div>
        </div>

      </Stack>
    </main>
  );
};

export default TermsAndCondition;