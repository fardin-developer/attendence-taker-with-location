import React from 'react';
import './Success.css'; 
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/')
  }, 4000);

  return (
    <div className="success-container">
      <div className="success-box">
        <div className="tick-mark-container">
          <div className="tick-mark">&#10004;</div>
        </div>
        <h2>Success!</h2>
        <p>Your attendance has been successfully recorded.</p>
      </div>
      <button className="home-button" onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default Success;
