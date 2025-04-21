import React, { useEffect } from 'react';
import './stars.css'; // Import the CSS file for the star effect

const Stars = () => {
  useEffect(() => {
    const numberOfStars = 100; // Adjust the number of stars
    const stars = [];

    // Create star elements dynamically
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random twinkling speed
      star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      star.style.top = `${Math.random() * 100}vh`; // Random vertical position
      stars.push(star);
      document.body.appendChild(star);
    }

    return () => {
      // Clean up the stars when component unmounts
      stars.forEach(star => document.body.removeChild(star));
    };
  }, []);

  return <div className="stars-background"></div>;
};

export default Stars;
