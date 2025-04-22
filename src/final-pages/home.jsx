import React from 'react';
import Stars from '../components/loader-components/stars';
import SettingsButton from '../components/home-components/settings-button';
import './Home.css'; // Make sure to import your CSS
import Credits from '../components/home-components/credits-button';
import UniqueButton from '../components/home-components/free-play-button';
import TimeModeButton from '../components/home-components/time-play-button';
import MultiplayerButton from '../components/home-components/online-mode';

const Home = () => {
  return (
    <div className="home">
    <Stars />
    <div className="home-page">
      

      <div className="split-container">
        <div className="left-panel">
          <div className="left-top">
          <img
        src="/assets/welcome.png"
        alt="Switch to Landscape Orientation"
        className="rotate-warning-image"
      />
   
  </div>
  <div className="left-bottom">
  <div className="container-left">
    <SettingsButton />
  </div>
  <div className="container-right">
    <Credits />
  </div>
</div>

        </div>
        <div className="right-panel">
  <div className="container-1"><UniqueButton /></div>
  <div className="container-2"><TimeModeButton /></div>
  <div className="container-3"><MultiplayerButton /></div>
</div>

      </div>

      
    </div>
    </div>
  );
};

export default Home;
