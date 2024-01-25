import React from 'react';
import './Failure.css'; // Import your CSS file for styling
import { useLocation } from 'react-router-dom';


const Failure = () => {
  const { state } = useLocation();
  const message = state?.message || "An error occurred.";
  const data = state?.data || "An error occurred.";
  return (
    <div className="failure-container">
      <div className="failure-box">
        <div className="cross-mark">&#10008;</div>
        <h2>{message}</h2>
        <p>{{data}}.</p>

        {/* You can add more information or buttons if needed */}
      </div>
    </div>
  );
};

export default Failure;
