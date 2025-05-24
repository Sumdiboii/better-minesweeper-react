import React from 'react';
import './settings.css'; // We'll style it separately
import Stars from '../components/loader-components/stars';
import BackFP from '../components/freeplay components/backFP';



const Settings = () => {
  return (
    <div className="settings-box">
      <Stars /> 
      <div className="main-cont1-settings">
        <div className="top-cont1-settings">
          <div className="back-btn-wrapper-settings">
          <BackFP />
          </div>
          <img src='/assets/settings.png'></img></div>
        <div className="bottom-cont1-settings">
            <div className="leftcontbox-settings">
              <div className="pic-box-settings"><img src='assets/ghiblisumdiboii.png'></img></div>
              <div className="socials-box-sp-settings">
  <a
    href="https://www.linkedin.com/in/sumedh-pimplikar"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-link-settings"
  >
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a
    href="https://wa.me/919922391450"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-link-settings"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
  <a
    href="https://your-portfolio.com"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-link-settings"
  >
    <i className="fas fa-user-circle"></i>
  </a>
</div>

              </div>
              <div className="midcontbox-settings">
                <div className="midcontbox-settings-top"><img src='assets/drop.png'></img></div>
                <div className="midcontbox-settings-bottom"></div>
              </div>
              <div className="rightcontbox-settings"></div>
              
            
            
        </div>
    </div>
    </div>
  );
};

export default Settings;
