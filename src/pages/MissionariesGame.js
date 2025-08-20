import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const MissionariesGame = () => {
  useEffect(() => {
    // Dynamically load the Novel Games script
    const script = document.createElement('script');
    script.src = '//license.novelgames.com/games/game.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="game-container">
      <header className="header" role="banner">
        <nav className="nav" aria-label="Main navigation">
          <ul>
            <li><Link to="/" className="nav-link" aria-label="Back to Home">Home</Link></li>
            <li><Link to="/student-login" className="nav-link" aria-label="Student Portal">Student Portal</Link></li>
            <li><Link to="/AdminLoginPage" className="nav-link" aria-label="Admin Portal">Admin Portal</Link></li>
          </ul>
        </nav>
      </header>
      <section className="game-section" aria-labelledby="game-title">
        <h1 id="game-title">Test Your IQ: Missionaries and Cannibals</h1>
        <p className="section-description">
          Challenge your problem-solving skills with this classic river-crossing puzzle. Can you get all the missionaries and cannibals across the river without anyone getting eaten?
        </p>
        <div className="game-wrapper">
          <ins
            className="novelgames_cloudgame"
            data-game-short-name="missionaries"
            data-language="en"
          ></ins>
        </div>
      </section>
    </div>
  );
};

export default MissionariesGame;