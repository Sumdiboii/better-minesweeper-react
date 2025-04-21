import React from 'react';
import { useNavigate } from 'react-router-dom';
import './free-play-button.css';

const UniqueButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/free-mode');
  };

  return (
    <div className="fpb-container" onClick={handleClick}>
      <div className="fpb-left">
        
      </div>
      <div className="fpb-right">
        <img src="assets/freeplay.png" alt="Free Play" className="fpb-image" />
      </div>
    </div>
  );
};

export default UniqueButton;
