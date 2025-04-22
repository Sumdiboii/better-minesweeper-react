import React from 'react';
import { useNavigate } from 'react-router-dom';
import './lrg-board-mp.css'; // Rename the CSS file for clarity if you like

const MPLarge = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/multiplayer-large-board');
  };

  return (
    <div className="mp-container-lrg" onClick={handleClick}>
      <div className="mp-left-lrg">
        
      </div>
      <div className="mp-right-lrg">
        <img src="assets/timecontrol.png" alt="Time Mode" className="mp-image-lrg" />
      </div>
    </div>
  );
};

export default MPLarge;
