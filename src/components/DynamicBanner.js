// import React, { useEffect, useState } from 'react';
// import styles from './../styles/DynamicBanner.css';

// const phrases = ["Help", "Provide Service", "Solve your queries"];

// const DynamicBanner = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.banner}>
//       <div className={styles.textBox}>
//         <div>We're Here</div>
//         <div className={styles.dynamicLine}>
//           <div className={styles.staticText}>To</div>
//           <div className={styles.dynamicTextContainer}>
//             <div
//               className={styles.dynamicText}
//               style={{ transform: `translateY(-${index * 1.2}em)` }}
//             >
//               {phrases.map((phrase, i) => (
//                 <span key={i}>{phrase}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DynamicBanner;
