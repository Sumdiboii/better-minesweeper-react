import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './final-pages/loader.jsx';
import Home from './final-pages/home.jsx';
import FreeMode from './final-pages/free-mode.jsx';
import RotateWarning from './components/loader-components/rotation-warning.jsx';
import Settings from './final-pages/settings'; // Adjust path as needed
import './App.css';
import GameLog from './final-pages/gamelog.jsx';

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
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 6500);
    const timer2 = setTimeout(() => {
      setShowLoader(false);
    }, 6900);
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
        <Route path="/free-mode" element={<FreeMode />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/gamelog" element={<GameLog />} />

      </Routes>
    </Router>
  );
};

export default App;
