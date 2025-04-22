import React from 'react';
import Stars from '../components/loader-components/stars';
import SettingsButton from '../components/home-components/settings-button';
import './Home.css'; // Make sure to import your CSS
import Credits from '../components/home-components/credits-button';
import './free-mode.css'; // Add style if you want
import FPSmallBoard from '../components/freeplay components/small-board-fp';
import FPMedBoard from '../components/freeplay components/med-board-fp';
import FPLrgBoard from '../components/freeplay components/lrg-board-fp';
import BackFP from '../components/freeplay components/backFP';


const FreeMode = () => {
  return (
    <div className="free">
    <Stars />

    <div className="main-cont1">
        <div className="top-cont1">
          <div className="back-btn-wrapper">
          <BackFP />
          </div>
          <img src='assets/freeplay.png'></img></div>
        <div className="bottom-cont1">
            <div className="leftcontbot">
                <div className="choose-mode-box"><img src='assets/pickboard.png'></img></div>
                <div className="modebox">
                    <div className="smallbox1"><FPSmallBoard /></div>
                    <div className="medbox1"><FPMedBoard /></div>
                    <div className="bigbox1"><FPLrgBoard /></div>
                </div> 
            </div>
            
        </div>
    </div>
    
    </div>
  );
};

export default FreeMode;
