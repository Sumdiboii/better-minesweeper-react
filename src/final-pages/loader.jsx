// src/pages/Home.jsx

import React from 'react';
import ParallaxMountains from '../components/mine-background.jsx'; // Adjust path if needed
import Stars from '../components/stars.jsx';
import AnimatedImage from '../components/minesweeper-title.jsx';

const Loader = () => {
  return (
    <div className="home-container">
      <ParallaxMountains />
       <Stars /> 
       <AnimatedImage />
    </div>
  );
};

export default Loader;
