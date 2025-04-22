import React from 'react';
import './backMP.css';
import { useNavigate } from 'react-router-dom';

const BackMP = () => {
  const navigate = useNavigate();

  return (
    <div className="triangle-button-wrapper-mp" onClick={() => navigate('/home')}>
      <div className="triangle-left-mp" />
    </div>
  );
};

export default BackMP;
