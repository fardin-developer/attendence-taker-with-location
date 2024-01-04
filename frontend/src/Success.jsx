import React from 'react';
import './Success.css'; // Import your CSS file for styling

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <div className="tick-mark-container">
          <div className="tick-mark">&#10004;</div>
        </div>
        <h2>Success!</h2>
        <p>Your attendance has been successfully recorded.</p>
        {/* You can add more information or buttons if needed */}
      </div>
    </div>
  );
};

export default Success;
