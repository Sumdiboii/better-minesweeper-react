import React, { useState } from 'react';
import './board-free-play.css';
import Stars from '../components/loader-components/stars';

const FreePlay = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false); // default to false

  return (
    <div className="bg-fpb">
     {/* <Stars />  */}

      {/* Navbar */}
      <div className="navbar-gb">
        <button className="sidebar-toggle" onClick={() => setIsPanelOpen(true)}>☰</button>
        <img src="assets/better-minesweeper.png" alt="Better Minesweeper" />
      </div>

      {/* Sidebar */}
      <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsPanelOpen(false)}>✖</button>
        <div className="quick-access-control-box"></div>
        <div className="music-player"></div>
        <div className="game-controls"></div>
        <div className="board-switch-quit"></div>
      </div>

      {/* Game Section */}
      <div className="freeplay-container">
        <div className="game-board">
         
          {/* Add game components here */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="end-bar-fpb">
        <img src='assets/freeplay.png'></img>
      </div>
    </div>
  );
};

export default FreePlay;
