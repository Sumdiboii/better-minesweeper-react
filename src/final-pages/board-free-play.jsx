import React, { useState } from 'react';
import './board-free-play.css';
import Stars from '../components/loader-components/stars';
import MinesweeperBoardFP from '../components/freeplay components/minesweeper-board-fp';
import Timer from '../components/freeplay components/timer';
import { useNavigate } from 'react-router-dom';


const FreePlay = () => {
  const navigate = useNavigate();
  const [isPanelOpen, setIsPanelOpen] = useState(false); // default to false
  const [timerRunning, setTimerRunning] = React.useState(false);
  const [gameReset, setGameReset] = React.useState(0);

  const musicVideos = [
    'jfKfPfyJRdk', // Lofi Girl
    '5yx6BWlEVcY', // Chillhop Music
    'DWcJFNfaw9c', // The Bootleg Boy
    '7NOSDKb0HlU', // College Music
    'hHW1oY26kxQ', // Ambient Renders
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleFirstClick = React.useCallback(() => {
    setTimerRunning(true);
  }, []);

  const handleGameOver = React.useCallback(() => {
    setTimerRunning(false);
  }, []);

  const handleNewGame = () => {
    setGameReset((r) => r + 1);
    setTimerRunning(false);
  };

  const handleTimeout = React.useCallback(() => {
    setGameReset((r) => r + 1);
    setTimerRunning(false);
  }, []);

  const handleMusicScroll = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setCurrentVideo((prev) => (prev + 1) % musicVideos.length);
    } else if (e.deltaY < 0) {
      setCurrentVideo((prev) => (prev - 1 + musicVideos.length) % musicVideos.length);
    }
  };

  return (
    <div className="bg-fpb">
      <Stars />  

      {/* Navbar */}
      <div className="navbar-gb">
        <button className="sidebar-toggle" onClick={() => setIsPanelOpen(true)}>☰</button>
        <img src="assets/better-minesweeper.png" alt="Better Minesweeper" />
      </div>

      {/* Sidebar */}
      <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsPanelOpen(false)}>✖</button>
        <div className="quick-access-control-box">quick-access-control-box ---dnd, silent, record, screenshot..</div>
        
        <div className="game-controls">game controls</div>
        <div className="focus-mode">focus mode full screen no animations just play tyrhard :0</div>
      </div>

      {/* Game Section */}
      <div className="freeplay-container">
        <div className="game-info-box">
            <div className="timer">
              <Timer running={timerRunning} reset={gameReset} onTimeout={handleTimeout} />
            </div>
            <div className="shortcutkeys">
              <div className="shortcut-col">
                <div className="shortcut-row">
                  <button className="themed-shortcut-btn" onClick={() => navigate('/home')} title="Quit to Home">
                    {/* Image placeholder for quit icon */}
                    <img src="/assets/quit-text.png" alt="Quit" style={{width:'1.5em',height:'1.5em',marginRight:'0.5em'}} />
                    
                  </button>
                </div>
              </div>
              <div className="shortcut-col">
                <div className="shortcut-row">
                  <button className="themed-shortcut-btn">Shortcut 2</button>
                </div>
              </div>
            </div>
            <div className="music-player">
              <div
                className="youtube-player-wrapper"
                style={{ outline: 'none', position: 'relative' }}
              >
                <div
                  className="youtube-scroll-overlay"
                  onWheel={handleMusicScroll}
                  tabIndex={0}
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '32px',
                    zIndex: 2,
                    background: 'transparent',
                    cursor: 'ns-resize',
                  }}
                  title="Scroll here to switch music"
                ></div>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${musicVideos[currentVideo]}?autoplay=0&controls=1&modestbranding=1&showinfo=0&rel=0`}
                  title="YouTube music player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '1rem', minHeight: '60px', minWidth: '180px', aspectRatio: '16/9', maxWidth: '100%' }}
                ></iframe>
              </div>
            </div>
            <div className="board-switch-fpb-game">board switch</div>
            <div className="new-quit-button">
              <button className="themed-shortcut-btn" onClick={handleNewGame} title="Start a New Game">
                {/* You can use a refresh/restart icon here if you have one, or just text */}
                <span role="img" aria-label="New Game" style={{marginRight:'0.5em',fontSize:'1.3em'}}></span>
                New Game
              </button>
            </div>
        </div>
        <div className="game-board">
          <MinesweeperBoardFP onFirstClick={handleFirstClick} gameReset={gameReset} onGameOver={handleGameOver} />
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
