import React from 'react';
import './backFP.css';
import { useNavigate } from 'react-router-dom';

const BackFP = () => {
  const navigate = useNavigate();

  return (
    <div className="triangle-button-wrapper-fp" onClick={() => navigate('/home')}>
      <div className="triangle-left-fp" />
    </div>
  );
};

export default BackFP;
