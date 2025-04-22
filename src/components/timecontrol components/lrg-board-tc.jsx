import React from 'react';
import { useNavigate } from 'react-router-dom';
import './lrg-board-tc.css'; // Rename the CSS file for clarity if you like

const TCLarge = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/time-mode-lrg');
  };

  return (
    <div className="tc-container-lrg" onClick={handleClick}>
      <div className="tc-left-lrg">
        
      </div>
      <div className="tc-right-lrg">
        <img src="assets/timecontrol.png" alt="Time Mode" className="tc-image-lrg" />
      </div>
    </div>
  );
};

export default TCLarge;
