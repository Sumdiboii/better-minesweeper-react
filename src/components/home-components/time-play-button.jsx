import React from 'react';
import { useNavigate } from 'react-router-dom';
import './time-play-button.css'; // Rename the CSS file for clarity if you like

const TimeModeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/time-mode');
  };

  return (
    <div className="tc-container" onClick={handleClick}>
      <div className="tc-left">
        
      </div>
      <div className="tc-right">
        <img src="assets/timecontrol.png" alt="Time Mode" className="tc-image" />
      </div>
    </div>
  );
};

export default TimeModeButton;
