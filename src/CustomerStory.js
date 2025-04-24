import React from 'react';
import './CustomerStory.css';
import CustomerStoryContent from './CustomerStoryContent';
import CustomerStoryQuote from './CustomerStoryQuote';

const CustomerStory = () => {
  return (
    <div className="customer-story-container">
      <CustomerStoryContent />
      <CustomerStoryQuote />
    </div>
  );
};

export default CustomerStory;
