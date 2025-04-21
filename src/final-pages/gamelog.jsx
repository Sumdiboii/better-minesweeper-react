import React from 'react';
import Stars from '../components/loader-components/stars';
import './gamelog.css'; // ✅ Add this line
// Removed unused SettingsButton and Credits imports

const GameLog = () => {
  return (
    <div className="gb">
      <Stars />

      <div className="main-gamelog-box">
        <div className="gamelog-top">top</div>
        <div className="gamelog-bottom">
            <div className="game-activity"></div>
            <div className="game-analysis">
                <div className="analysis-title"></div>
                <div className="analysis-section"></div>
            </div>
            </div>
      </div>
    </div>
  );
};

export default GameLog;
