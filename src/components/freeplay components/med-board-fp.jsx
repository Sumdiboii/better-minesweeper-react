import React from 'react';
import { useNavigate } from 'react-router-dom';
import './med-board-fp.css';

const FPMedBoard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Open board-free-play with medium board preset
    navigate('/board-free-play?board=medium');
  };

  return (
    <div className="fpm-container" onClick={handleClick}>
      <div className="fpm-left">
        
      </div>
      <div className="fpm-right">
        <img src="assets/medium-text-board.png" alt="Medium Board" className="fpm-image" />
      </div>
    </div>
  );
};

export default FPMedBoard;
