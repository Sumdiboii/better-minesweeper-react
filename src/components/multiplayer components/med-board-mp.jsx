import React from 'react';
import { useNavigate } from 'react-router-dom';
import './med-board-mp.css'; // Rename the CSS file for clarity if you like

const MPMed = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/multiplayer-board-med');
  };

  return (
    <div className="mp-container-med" onClick={handleClick}>
      <div className="mp-left-med">
        
      </div>
      <div className="mp-right-med">
        <img src="assets/timecontrol.png" alt="Time Mode" className="mp-image-med" />
      </div>
    </div>
  );
};

export default MPMed;
