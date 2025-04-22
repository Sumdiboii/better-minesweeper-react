import React from 'react';
import './backTC.css';
import { useNavigate } from 'react-router-dom';

const BackTC = () => {
  const navigate = useNavigate();

  return (
    <div className="triangle-button-wrapper-tc" onClick={() => navigate('/home')}>
      <div className="triangle-left-tc" />
    </div>
  );
};

export default BackTC;
