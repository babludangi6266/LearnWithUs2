import React from 'react';
import '../styles/Loader.css';

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-content">
      <div className="loader-spinner"></div>
      <h3 className="loader-title">Waking Up the Servers ☕</h3>
      <p className="loader-text">
        Our free-tier servers need a moment to warm up!<br />
        This usually takes 10-15 seconds on first load.<br />
        Thanks for your patience – good things take time!
      </p>
      <div className="loader-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  </div>
);

export default Loader;