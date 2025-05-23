import React from 'react';
import { useNavigate } from 'react-router-dom';
import './small-board-mp.css'; // Rename the CSS file for clarity if you like

const MPSmall = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/multiplayer-small-board');
  };

  return (
    <div className="mp-container-small" onClick={handleClick}>
      <div className="mp-left-small">
        
      </div>
      <div className="mp-right-small">
        <img src="assets/small-text-board.png" alt="Time Mode" className="mp-image-small" />
      </div>
    </div>
  );
};

export default MPSmall;
