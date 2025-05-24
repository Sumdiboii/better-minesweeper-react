import React, { useState, useRef } from 'react';
import './board-free-play.css';
import Stars from '../components/loader-components/stars';
import MinesweeperBoardFP from '../components/freeplay components/minesweeper-board-fp';
import Timer from '../components/freeplay components/timer';
import { useNavigate, useLocation } from 'react-router-dom';
import html2canvas from '../../node_modules/html2canvas/dist/html2canvas.esm.js';

// Board presets: [rows, cols, mines]
const BOARD_PRESETS = [
  { label: 'Small', rows: 9, cols: 9, mines: 10 },
  { label: 'Medium', rows: 14, cols: 20, mines: 52 }, // 2 more rows, adjust mines for balance
  { label: 'Large', rows: 16, cols: 30, mines: 99 },
];

const BACKGROUNDS = [
  null, // Button 1 is screenshot, not a background
  'bg1',
  'bg2',
  'bg3',
  'bg4',
  'bg5',
];

const FreePlay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPanelOpen, setIsPanelOpen] = useState(false); // default to false
  const [timerRunning, setTimerRunning] = React.useState(false);
  const [gameReset, setGameReset] = React.useState(0);
  const [boardPresetIdx, setBoardPresetIdx] = useState(0);
  const [proMode, setProMode] = useState(false);
  const [screenshotLoading, setScreenshotLoading] = useState(false);
  const [hideYoutube, setHideYoutube] = useState(false);
  const [activeBgIdx, setActiveBgIdx] = useState(1); // Default to first background
  const mainGameRef = useRef(null);

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

  // Board size switch handler
  const handleBoardSwitch = (idx) => {
    setBoardPresetIdx(idx);
    setGameReset((r) => r + 1);
    setTimerRunning(false);
  };

  // Parse board type from query param
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const board = params.get('board');
    if (board === 'small') setBoardPresetIdx(0);
    else if (board === 'medium') setBoardPresetIdx(1);
    else if (board === 'large') setBoardPresetIdx(2);
  }, [location.search]);

  const { rows, cols, mines } = BOARD_PRESETS[boardPresetIdx];

  // Add screenshot handler at the top level of FreePlay
  function handleScreenshot() {
    const sidePanel = document.querySelector('.side-panel');
    // Use the main game area only (not .bg-fpb) for screenshot
    const gameScreen = mainGameRef.current;
    if (!gameScreen) return;
    setHideYoutube(true);
    // Hide sidebar with animation
    if (sidePanel && sidePanel.classList.contains('open')) {
      sidePanel.classList.remove('open');
      setTimeout(() => doScreenshot(), 350);
    } else {
      doScreenshot();
    }
    function doScreenshot() {
      // Ensure loader is not visible during capture
      setScreenshotLoading(false);
      // Wait a tick to ensure React updates DOM (hideYoutube, sidebar)
      setTimeout(() => {
        html2canvas(gameScreen).then(canvas => {
          // Animate sidebar open
          if (sidePanel) sidePanel.classList.add('open');
          setTimeout(() => {
            setHideYoutube(false);
            setScreenshotLoading(true); // Show loader only after screenshot is taken
            setTimeout(() => {
              setScreenshotLoading(false);
              const link = document.createElement('a');
              link.download = 'minesweeper-game.png';
              link.href = canvas.toDataURL('image/png');
              link.click();
            }, 600); // Show loader briefly for feedback
          }, 350);
        });
      }, 30); // Give React a moment to update DOM
    }
  }

  return (
    <>
      {screenshotLoading && (
        <div className="screenshot-loading-overlay">
          <div className="screenshot-loading-spinner"></div>
          <div className="screenshot-loading-text">Screenshot saved!</div>
        </div>
      )}
      <div className={`bg-fpb${activeBgIdx ? ' ' + BACKGROUNDS[activeBgIdx] : ''}${activeBgIdx === 2 ? ' violet-theme' : ''}${activeBgIdx === 3 ? ' fire-theme' : ''}${activeBgIdx === 4 ? ' cshop-theme' : ''}${activeBgIdx === 5 ? ' snow-theme' : ''}`}> {/* Add background and theme class */}
        {activeBgIdx === 1 && <Stars />}
        {/* Navbar */}
        <div className="navbar-gb">
          <button className="sidebar-toggle" onClick={() => setIsPanelOpen(true)}>☰</button>
          <img src="assets/better-minesweeper.png" alt="Better Minesweeper" />
        </div>

        {/* Sidebar */}
        <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={() => setIsPanelOpen(false)}>✖</button>
          <div className="quick-access-control-box">
            <div className="quick-access-grid">
              <div className="quick-cell cell-1" onClick={handleScreenshot}>1 SS</div>
              <div className={`quick-cell cell-2${activeBgIdx === 1 ? ' active-bg-btn' : ''}`} onClick={() => setActiveBgIdx(1)}>2</div>
              <div className={`quick-cell cell-3${activeBgIdx === 2 ? ' active-bg-btn' : ''}`} onClick={() => setActiveBgIdx(2)}>3</div>
              <div className={`quick-cell cell-4${activeBgIdx === 3 ? ' active-bg-btn' : ''}`} onClick={() => setActiveBgIdx(3)}>4</div>
              <div className={`quick-cell cell-5${activeBgIdx === 4 ? ' active-bg-btn' : ''}`} onClick={() => setActiveBgIdx(4)}>5</div>
              <div className={`quick-cell cell-6${activeBgIdx === 5 ? ' active-bg-btn' : ''}`} onClick={() => setActiveBgIdx(5)}>6</div>
            </div>
          </div>
          <div className="game-controls">game controls</div>
          <div className="focus-mode">focus mode full screen no animations just play tyrhard :0</div>
        </div>

        {/* Main Game Area (for screenshot) */}
        <div ref={mainGameRef} style={{width:'100%',height:'100%'}}>
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
                        {/* <img src="/assets/quit-text.png" alt="Quit" style={{width:'1.5em',height:'1.5em',marginRight:'0.5em'}} /> */}
                        QUIT
                      </button>
                    </div>
                  </div>
                  <div className="shortcut-col">
                    <div className="shortcut-row">
                      <button
                        className={`themed-shortcut-btn pro-mode-btn${proMode ? ' active' : ''}`}
                        onClick={() => setProMode((v) => !v)}
                        title="Toggle Pro Mode (Flags Invisible)"
                      >
                        PRO MODE
                      </button>
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
                    {hideYoutube ? (
                      <div className="youtube-placeholder">
                        YouTube music not included in screenshot
                      </div>
                    ) : (
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
                    )}
                  </div>
                </div>
                <div className="board-switch-fpb-game">
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
                    {BOARD_PRESETS.map((preset, idx) => (
                      <button
                        key={preset.label}
                        className={`themed-shortcut-btn${boardPresetIdx === idx ? ' active' : ''}`}
                        style={{ fontWeight: boardPresetIdx === idx ? 'bold' : undefined }}
                        onClick={() => handleBoardSwitch(idx)}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="new-quit-button">
                  <button className="themed-shortcut-btn" onClick={handleNewGame} title="Start a New Game">
                    {/* You can use a refresh/restart icon here if you have one, or just text */}
                    <span role="img" aria-label="New Game" style={{marginRight:'0.5em',fontSize:'1.3em'}}>🔄</span>
                    New Game
                  </button>
                </div>
            </div>
            <div className="game-board">
              <MinesweeperBoardFP
                onFirstClick={handleFirstClick}
                gameReset={gameReset}
                onGameOver={handleGameOver}
                rows={rows}
                cols={cols}
                mines={mines}
                proMode={proMode}
              />
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="end-bar-fpb">
            <img src='assets/freeplay.png'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreePlay;
