import React from 'react';
import './credits-button.css';
import { useNavigate } from 'react-router-dom';

const Credits = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gamelog');
  };

  return (
    <button className="credit-button" onClick={handleClick}>
      <span className="bar bar1"></span>
      <span className="bar bar2"></span>
      <span className="bar bar1"></span>
    </button>
  );
};

export default Credits;
