import { useState, useEffect } from 'react';
import style from './App.module.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className={`${style.container}`}>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
