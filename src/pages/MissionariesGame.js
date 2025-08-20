
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaShareAlt, FaRedo, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import '../styles/main.css';

const MissionariesGame = () => {
  const [moves, setMoves] = useState(0);
  const [gameTime, setGameTime] = useState('0:00');
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  // Animation for tutorial collapse/expand
  const tutorialAnimation = useSpring({
    maxHeight: isTutorialOpen ? '600px' : '60px',
    opacity: isTutorialOpen ? 1 : 0.8,
    config: { tension: 220, friction: 24 },
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//license.novelgames.com/games/game.js';
    script.async = true;
    document.body.appendChild(script);

    // Placeholder for game stats (replace with actual game API if available)
    const moveInterval = setInterval(() => {
      // Update moves and time based on game events if API is available
    }, 1000);

    return () => {
      document.body.removeChild(script);
      clearInterval(moveInterval);
    };
  }, []);

  const shareOnX = () => {
    const shareText = `I solved Missionaries & Cannibals in ${moves} moves and ${gameTime}! Test your IQ at ${window.location.href} #LearnWithUs #PuzzleChallenge`;
    const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleRestart = () => {
    setMoves(0);
    setGameTime('0:00');
    // Implement game reset logic if supported by Novel Games
  };

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
        <div className="game-content">
          <div className="game-main">
            <h1 id="game-title" className="game-title">Test Your IQ: Missionaries & Cannibals</h1>
            <p className="section-description">
              Embark on a thrilling river-crossing adventure! Safely transport three missionaries and three cannibals across a river using a raft that holds up to two people. Ensure cannibals never outnumber missionaries on either side to avoid danger!
            </p>
            <div className="game-wrapper">
              <ins
                className="novelgames_cloudgame"
                data-game-short-name="missionaries"
                data-language="en"
              ></ins>
            </div>
            <div className="game-controls">
              <button
                className="game-btn restart-btn"
                onClick={handleRestart}
                aria-label="Restart Game"
              >
                <FaRedo /> Restart Game
              </button>
              <div className="game-stats">
                <p><strong>Moves:</strong> {moves}</p>
                <p><strong>Time:</strong> {gameTime}</p>
              </div>
              <div className="game-share">
                <button
                  className="share-btn"
                  onClick={shareOnX}
                  aria-label="Share on X"
                >
                  <FaTwitter /> Share on X
                </button>
                <button
                  className="share-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(`I solved Missionaries & Cannibals in ${moves} moves! Try it at ${window.location.href}`);
                    alert('Link copied to clipboard!');
                  }}
                  aria-label="Copy share link"
                >
                  <FaShareAlt /> Copy Link
                </button>
              </div>
            </div>
          </div>
          <animated.div style={tutorialAnimation} className="game-sidebar">
            <button
              className="tutorial-toggle"
              onClick={() => setIsTutorialOpen(!isTutorialOpen)}
              aria-label={isTutorialOpen ? 'Collapse Tutorial' : 'Expand Tutorial'}
            >
              <h2>How to Play</h2>
              {isTutorialOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className="tutorial-content">
              <ul>
                <li><strong>Objective</strong>: Transport three missionaries and three cannibals to the right bank.</li>
                <li><strong>Raft Capacity</strong>: The raft holds 1 or 2 people at a time.</li>
                <li><strong>Constraint</strong>: Cannibals must not outnumber missionaries on either side (unless no missionaries are present).</li>
                <li><strong>Controls</strong>: Click to select 1-2 people, then click the raft to move them. Settle them on the other side.</li>
                <li><strong>Tip</strong>: Plan moves to avoid invalid states. Aim for minimal moves (optimal solution is 11 moves)!</li>
              </ul>
            </div>
          </animated.div>
        </div>
      </section>
    </div>
  );
};

export default MissionariesGame;
