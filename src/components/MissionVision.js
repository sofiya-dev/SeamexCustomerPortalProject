import React from 'react';
import { Stack, Text } from '@fluentui/react';
import './../styles/MissionVision.css';
import missionImage from '../assets/MissionImage.png';
import visionImage from '../assets/VisionImage.png';

const MissionVision = () => {
  return (
    <div className="missionVisionContainer">
   <Text variant="xxLargePlus" className="title">
  Mission <span className="andWord">and</span> <span className="highlight">Vision</span>
</Text>
      <Stack horizontal wrap tokens={{ childrenGap: 40 }} horizontalAlign="center">
        <img src={missionImage} alt="Mission" className="mvCard" />
        <img src={visionImage} alt="Vision" className="mvCard" />
      </Stack>
    </div>
  );
};

export default MissionVision;
