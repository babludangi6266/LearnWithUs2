
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/studentHomePage.css';

const StudentHomePage = () => {
  return (
    <div className="student-home-container">
      <header className="student-header">
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>Student Portal</h1>
          </div>
          <ul className="navbar-links">
            <li><Link to="/StudentPhases" className="student-link">Phases</Link></li>
            <li><Link to="/NotesPage" className="student-link">Notes</Link></li>
            <li><Link to="/StudentProgressPage" className="student-link">Track Progress</Link></li>             
            <li><Link to="/Feedback" className="student-link">View Feedback</Link></li>
          </ul>
        </nav>
      </header>

      {/* Background slideshow with quote */}
      <div className="slideshow">
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg1.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg2.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg3.jpg')})` }}></div>
        {/* More images can be added similarly */}
        <div className="quote-container">
          <blockquote className="quote-text">
            "It is no exaggeration to regard this as the most fundamental idea in programming: The evaluator, which determines the meaning of expressions in a programming language, is just another program. To appreciate this point is to change our images of ourselves as programmers. We come to see ourselves as designers of languages, rather than only users of languages designed by others. In fact, we can regard almost any program as the evaluator for some language."
            <span className="quote-author">— Gerald Jay Sussman and Hal Abelson</span>
          </blockquote>
        </div>
      </div>

      {/* Content below the slideshow */}
      <section className="content-section">
        <h2>Discover the Future of Tech</h2>
        <div className="grid-layout">
          <div className="grid-item">
            <h3>AI & Machine Learning</h3>
            <p>Explore the latest AI trends, including machine learning models, neural networks, and their real-world applications.</p>
          </div>
          <div className="grid-item">
            <h3>Data Science</h3>
            <p>Analyze and visualize large data sets. Create projects to solve complex problems using predictive analytics.</p>
          </div>
          <div className="grid-item">
            <h3>Blockchain</h3>
            <p>Understand how blockchain is revolutionizing secure, decentralized systems and start building DApps and smart contracts.</p>
          </div>
          <div className="grid-item">
            <h3>Cryptocurrency</h3>
            <p>Dive into the world of digital currencies and develop projects like cryptocurrency wallets or trading platforms.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentHomePage;
