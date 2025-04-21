import React from 'react';
import Stars from '../components/loader-components/stars';
import SettingsButton from '../components/home-components/settings-button';
import './Home.css'; // Make sure to import your CSS
import Credits from '../components/home-components/credits-button';
import './free-mode.css'; // Add style if you want

const FreeMode = () => {
  return (
    <div className="free">
    <Stars />

    <div className="main-cont1">
        <div className="top-cont1"><img src='assets/freeplay.png'></img></div>
        <div className="bottom-cont1">
            <div className="leftcontbot">
                <div className="choose-mode-box"></div>
                <div className="modebox">
                    <div className="smallbox1"></div>
                    <div className="medbox1"></div>
                    <div className="bigbox1"></div>
                </div>
            </div>
            <div className="rightcontbot"></div>
        </div>
    </div>
    
    </div>
  );
};

export default FreeMode;
