import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-inner-container">
        <a href="/testimonials-page" title="Testimonials" className="testimonials-link">
          <svg xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 24 24" fill="white">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.175L12 18.896l-7.336 3.861 1.402-8.175L.132 9.21l8.2-1.192z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
