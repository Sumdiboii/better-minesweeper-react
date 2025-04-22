import React from 'react';
import { useNavigate } from 'react-router-dom';
import './lrg-board-fp.css';

const FPLrgBoard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/fp-lrg-game');
  };

  return (
    <div className="fpl-container" onClick={handleClick}>
      <div className="fpl-left">
        
      </div>
      <div className="fpl-right">
        <img src="assets/freeplay.png" alt="Free Play" className="fpl-image" />
      </div>
    </div>
  );
};

export default FPLrgBoard;
