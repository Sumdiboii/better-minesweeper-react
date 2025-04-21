import React from 'react';
import './rotation-warning.css';

const RotateWarning = ({ isVisible }) => {
  return (
    <div className={`rotate-warning-container ${isVisible ? 'visible' : 'hidden'}`}>
      <img
        src="/assets/orientation-switch.png"
        alt="Switch to Landscape Orientation"
        className="rotate-warning-image"
      />
    </div>
  );
};

export default RotateWarning;
