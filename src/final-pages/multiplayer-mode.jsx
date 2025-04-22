import React from 'react';
import Stars from '../components/loader-components/stars';
import SettingsButton from '../components/home-components/settings-button';
import './Home.css'; // Make sure to import your CSS
import Credits from '../components/home-components/credits-button';
import './multiplayer-mode.css'; // Add style if you want
import FPSmallBoard from '../components/freeplay components/small-board-fp';
import FPMedBoard from '../components/freeplay components/med-board-fp';
import FPLrgBoard from '../components/freeplay components/lrg-board-fp';
import MPSmall from '../components/multiplayer components/small-board-mp';
import MPLarge from '../components/multiplayer components/lrg-board-mp';
import MPMed from '../components/multiplayer components/med-board-mp';
import BackMP from '../components/multiplayer components/backMP';


const MultiplayerM = () => {
  return (
    <div className="free">
    <Stars />

    <div className="main-cont1-mp">
        <div className="top-cont1-mp">
          <div className="back-btn-wrapper-mp"><BackMP /></div>
          <img src='assets/multiplayer.png'></img></div>
        <div className="bottom-cont1-mp">
            <div className="leftcontbot-mp">
                <div className="choose-mode-box-mp"><img src='assets/pickboard.png'></img></div>
                <div className="modebox-mp">
                    <div className="smallbox1-mp"><MPSmall /></div>
                    <div className="medbox1-mp"><MPMed /></div>
                    <div className="bigbox1-mp"><MPLarge /></div>
                </div> 
            </div>
            
        </div>
    </div>
    
    </div>
  );
};

export default MultiplayerM;
