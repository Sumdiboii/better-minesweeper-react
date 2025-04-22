import React from 'react';
import Stars from '../components/loader-components/stars';
import SettingsButton from '../components/home-components/settings-button';
import './Home.css'; // Make sure to import your CSS
import Credits from '../components/home-components/credits-button';
import './time-mode.css'; // Add style if you want

import TCLarge from '../components/timecontrol components/lrg-board-tc';
import TCMed from '../components/timecontrol components/med-board-tc';
import TCSmall from '../components/timecontrol components/small-board-tc';


const TimeMode = () => {
  return (
    <div className="free">
    <Stars />

    <div className="main-cont1-tm">
        <div className="top-cont1-tm"><img src='assets/timecontrol.png'></img></div>
        <div className="bottom-cont1-tm">
            <div className="leftcontbot-tm">
                <div className="choose-mode-box-tm"><img src='assets/pickboard.png'></img></div>
                <div className="modebox-tm">
                    <div className="smallbox1-tm"><TCSmall /></div>
                    <div className="medbox1-tm"><TCMed /></div>
                    <div className="bigbox1-tm"><TCLarge /></div>
                </div> 
            </div>
            
        </div>
    </div>
    
    </div>
  );
};

export default TimeMode;
