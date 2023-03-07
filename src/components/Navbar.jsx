import React from 'react';
import style from './style/navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${style.container}`}>
      <h1>Weather App</h1>
    </div>
  );
};

export default Navbar;
