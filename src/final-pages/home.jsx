// home.jsx
import React from 'react';
import Stars from '../components/loader-components/stars';
import SettingsButton from '../components/home-components/settings-button';

const Home = () => {
  return (
    <div className="home-page">
        <Stars />
        <SettingsButton />
      <h1>Welcome to Minesweeper!</h1>
      <p>This is the demo page after the loader.</p>
    </div>
  );
};

export default Home;
