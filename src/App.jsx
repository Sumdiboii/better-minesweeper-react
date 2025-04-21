// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './final-pages/loader.jsx';
import Home from './final-pages/home.jsx';
import './App.css'; // Import CSS for animations
import RotateWarning from './components/loader-components/rotation-warning.jsx';

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
      // Optional: start background transition if needed
    }, 6500);
  
    const timer2 = setTimeout(() => {
      // Delay hiding loader just slightly longer to avoid flash
      setShowLoader(false);
    }, 6750); // slight increase from 8000 to 8200 for buffer
  
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Router>
      {isLandscape ? (
        <div className="app-wrapper">
          {showLoader ? (
            <div className={`fade ${fadeOut ? 'fade-out' : 'fade-in'}`}>
              <Loader />
            </div>
          ) : (
            <div className="fade fade-in">
              <Home />
            </div>
          )}
        </div>
      ) : (
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
      )}
    </Router>
  );
};

export default App;
