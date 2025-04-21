import React from 'react';
import { useNavigate } from 'react-router-dom';
import './online-mode.css'; // Use a separate file if preferred

const MultiplayerButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/multiplayer-mode');
  };

  return (
    <div className="mp-container" onClick={handleClick}>
      <div className="mp-left">
        
      </div>
      <div className="mp-right">
        <img src="assets/freeplay.png" alt="Multiplayer Mode" className="mp-image" />
      </div>
    </div>
  );
};

export default MultiplayerButton;
