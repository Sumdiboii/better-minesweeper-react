import React from 'react';
import { useNavigate } from 'react-router-dom';
import './small-board-fp.css';

const FPSmallBoard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/fp-small-game');
  };

  return (
    <div className="fps-container" onClick={handleClick}>
      <div className="fps-left">
        
      </div>
      <div className="fps-right">
        <img src="assets/freeplay.png" alt="Free Play" className="fps-image" />
      </div>
    </div>
  );
};

export default FPSmallBoard;
