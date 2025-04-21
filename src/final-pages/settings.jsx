import React from 'react';
import Stars from '../components/loader-components/stars';
import './settings.css'; // ✅ Add this line
// Removed unused SettingsButton and Credits imports

const Settings = () => {
  return (
    <div className="bg">
      <Stars />

      <div className="main-settings-box">
        <div className="settings-top">top</div>
        <div className="settings-bottom">bottom</div>
      </div>
    </div>
  );
};

export default Settings;
