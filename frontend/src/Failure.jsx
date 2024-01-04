import React from 'react';
import './Failure.css'; // Import your CSS file for styling

const Failure = () => {
  return (
    <div className="failure-container">
      <div className="failure-box">
        <div className="cross-mark">&#10008;</div>
        <h2>Operation Failed</h2>
        <p>Sorry, something went wrong. Please try again later.</p>
        {/* You can add more information or buttons if needed */}
      </div>
    </div>
  );
};

export default Failure;
