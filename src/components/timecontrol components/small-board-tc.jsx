import React from 'react';
import { useNavigate } from 'react-router-dom';
import './small-board-tc.css'; // Rename the CSS file for clarity if you like

const TCSmall = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/time-mode-small');
  };

  return (
    <div className="tc-container-small" onClick={handleClick}>
      <div className="tc-left-small">
        
      </div>
      <div className="tc-right-small">
        <img src="assets/timecontrol.png" alt="Time Mode" className="tc-image-small" />
      </div>
    </div>
  );
};

export default TCSmall;
