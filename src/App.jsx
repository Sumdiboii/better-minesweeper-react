// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './final-pages/loader.jsx'; // Update this path as needed

const App = () => {
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

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

  return (
    <Router>
      {isLandscape ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
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
          Please rotate your device to landscape mode to use this app.
        </div>
      )}
    </Router>
  );
};

export default App; // ✅ THIS LINE FIXES THE ERROR
