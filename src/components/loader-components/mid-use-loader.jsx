import React from 'react';
import './mid-use-loader.css'; // Make sure you include the styles!
import Stars from './stars';

const BanterLoader = () => {
  return (
    <div className="bg-bl">
        <Stars />
    <div className="banter-loader">
      {[...Array(9)].map((_, index) => (
        <div className="banter-loader__box" key={index}></div>
      ))}
    </div>
    </div>
  );
};

export default BanterLoader;
