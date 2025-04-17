// import React from 'react';
// import './../styles/IsoFlipCards.css';
// import { Stack } from '@fluentui/react';
// import CertificationStrip from '../assets/CertificationStrip.png'; 

// import qmsFront from '../assets/CertificationFrontImage.png';
// import qmsBack from '../assets/CertificationBackImage1.png';
// import ismsFront from '../assets/CertificationFrontImage.png';
// import ismsBack from '../assets/CertificationBackImage2.png';
// import pimsFront from '../assets/CertificationFrontImage.png';
// import pimsBack from '../assets/CertificationBackImage3.png';

// const cards = [
//   { front: qmsFront, back: qmsBack, alt: 'QMS Certificate' },
//   { front: ismsFront, back: ismsBack, alt: 'ISMS Certificate' },
//   { front: pimsFront, back: pimsBack, alt: 'PIMS Certificate' },
// ];

// const IsoFlipCards = () => {
//   return (
//     <div>
//     <div className="flip-section">
//       <Stack horizontal horizontalAlign="center" tokens={{ childrenGap: 30 }}>
//         {cards.map((card, index) => (
//           <div className="flip-card" key={index}>
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img src={card.front} alt={`${card.alt} Front`} />
//               </div>
//               <div className="flip-card-back">
//                 <img src={card.back} alt={`${card.alt} Back`} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Stack>
//       </div>
//       <img className= "certificationStrip" src={CertificationStrip} alt="Certification Strip" />
//     </div>
//   );
// };

// export default IsoFlipCards;


import React from 'react';
import './../styles/IsoFlipCards.css';
import CertificationStrip from '../assets/CertificationStrip.png'; 

import qmsFront from '../assets/CertificationFrontImage.png';
import qmsBack from '../assets/CertificationBackImage1.png';
import ismsFront from '../assets/CertificationFrontImage.png';
import ismsBack from '../assets/CertificationBackImage2.png';
import pimsFront from '../assets/CertificationFrontImage.png';
import pimsBack from '../assets/CertificationBackImage3.png';

const cards = [
  { front: qmsFront, back: qmsBack, alt: 'QMS Certificate' },
  { front: ismsFront, back: ismsBack, alt: 'ISMS Certificate' },
  { front: pimsFront, back: pimsBack, alt: 'PIMS Certificate' },
];

const IsoFlipCards = () => {
  return (
    <div>
      <div className="flip-section">
        <div className="flip-card-container">
          {cards.map((card, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={card.front} alt={`${card.alt} Front`} />
                </div>
                <div className="flip-card-back">
                  <img src={card.back} alt={`${card.alt} Back`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="certificationStrip" src={CertificationStrip} alt="Certification Strip" />
    </div>
  );
};

export default IsoFlipCards;
