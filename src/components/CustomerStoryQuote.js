

import React from 'react';
import './../styles/CustomerStory.css';

const CustomerStoryQuote = () => {
  return (
    <div className="quote-container">
      <div className="quote-wrapper">
        <span className="quote-icon start">“</span>                  
        <p className="quote-text">
          If we can show that monitoring was able to pick up prior to a service disruption, 
          we're able to show that the investments we make in the monitoring tool are giving the business value.
          <span className="quote-icon end">”</span>
        </p>
      </div>
        <p className="quote-author">
        Jon Moore, Domain Architect, Progressive Insurance</p>
     
      <div className="quote-metric">
        <h2>$120B</h2>
        <p>in market capitalization protected</p>
      </div>
    </div>
  );
};

export default CustomerStoryQuote;
