import React from 'react';
import { useNavigate } from 'react-router-dom';
import './med-board-tc.css'; // Rename the CSS file for clarity if you like

const TCMed = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/time-mode-med');
  };

  return (
    <div className="tc-container-med" onClick={handleClick}>
      <div className="tc-left-med">
        
      </div>
      <div className="tc-right-med">
        <img src="assets/medium-text-board.png" alt="Time Mode" className="tc-image-med" />
      </div>
    </div>
  );
};

export default TCMed;
