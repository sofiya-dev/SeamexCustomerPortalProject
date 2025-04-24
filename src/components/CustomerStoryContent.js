import React from 'react';
import './../styles/CustomerStory.css';
import { DefaultButton } from '@fluentui/react';

const CustomerStoryContent = () => {
  return (
    <div className="customer-story-left">
      <div className="play-button-overlay">
        <DefaultButton text="Play Video" className="read-button" />
      </div>
    </div>
  );
};

export default CustomerStoryContent;


