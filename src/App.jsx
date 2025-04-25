import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Loader from './final-pages/loader.jsx';
import Home from './final-pages/home.jsx';
import FreeMode from './final-pages/free-mode.jsx';
import RotateWarning from './components/loader-components/rotation-warning.jsx';
import Settings from './final-pages/settings';
import GameLog from './final-pages/gamelog.jsx';
import FPSmallBoard from './components/freeplay components/small-board-fp.jsx';
import FPMedBoard from './components/freeplay components/med-board-fp.jsx';
import TimeMode from './final-pages/time-mode.jsx';
import MultiplayerM from './final-pages/multiplayer-mode.jsx';
import BackFP from './components/freeplay components/backFP.jsx';
import BanterLoader from './components/loader-components/mid-use-loader.jsx';

import './App.css';

// ✅ Component to handle route loading animation
const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // Adjust duration if needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <BanterLoader />}
      {!loading && children}
    </>
  );
};

const App = () => {
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const checkOrientation = () => {
    setIsLandscape(window.innerWidth > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 6500);
    const timer2 = setTimeout(() => setShowLoader(false), 6900);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isLandscape) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          color: '#fff',
          fontSize: '24px',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <RotateWarning />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            showLoader ? (
              <div className={`fade ${fadeOut ? 'fade-out' : 'fade-in'}`}>
                <Loader />
              </div>
            ) : (
              <div className="fade fade-in">
                <Home />
              </div>
            )
          }
        />

        {/* Wrap all other routes inside RouteWrapper to show loader on route change */}
        <Route
          path="*"
          element={
            <RouteWrapper>
              <Routes>
                <Route path="/free-mode" element={<FreeMode />} />
                <Route path="/time-mode" element={<TimeMode />} />
                <Route path="/multiplayer-mode" element={<MultiplayerM />} />
                <Route path="/home" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/gamelog" element={<GameLog />} />
                <Route path="/small-board" element={<FPSmallBoard />} />
                <Route path="/med-board" element={<FPMedBoard />} />
                <Route path="/backfp" element={<BackFP />} />
              </Routes>
            </RouteWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
