import React from 'react';
import { Text } from '@fluentui/react';
import './../styles/VisionFuture.css';
import VisionIcon from '../assets/VisionForFutureIcon.png';

const VisionFuture = () => {
  return (
    <div className="visionFutureContainer">
      <div className="visionFutureContent">
        <Text variant="xxLarge" className="visionFutureTitle">
        <span className="visionHeading">Vision </span><span className="futureHeading">for the Future</span>
        </Text>
        <ul className="visionFutureList">
          <li className= "visionFutureText">
            Looking ahead, we are committed to advancing HR services through cutting-edge technology
            and future-proofing our operations. Our "Engage, Enable, Enhance" framework ensures alignment
            with ABG's dynamic business needs and global expansion strategies.
          </li>
        </ul>
      </div>

      <img
        src={VisionIcon}
        alt="Vision Icon"
        className="visionFutureIcon"
      />
    </div>
  );
};

export default VisionFuture;
