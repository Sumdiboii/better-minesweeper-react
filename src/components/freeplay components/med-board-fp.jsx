import React from 'react';
import { useNavigate } from 'react-router-dom';
import './med-board-fp.css';

const FPMedBoard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/board-free-play');
  };

  return (
    <div className="fpm-container" onClick={handleClick}>
      <div className="fpm-left">
        
      </div>
      <div className="fpm-right">
        <img src="assets/freeplay.png" alt="Free Play" className="fpm-image" />
      </div>
    </div>
  );
};

export default FPMedBoard;
