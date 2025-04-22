// ProfileButton.jsx
import React from 'react';
import './profile-button.css';

const ProfileButton = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <a href="/about" title="Go to about me page" className="profile-link">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProfileButton;
