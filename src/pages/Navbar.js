import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Student Portal</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/student-home" className="student-link">Student Home</Link></li>
        <li><Link to="/StudentPhases" className="student-link">Phases</Link></li>
        <li><Link to="/NotesPage" className="student-link">Notes</Link></li>
        <li><Link to="/StudentProgressPage" className="student-link">Track Progress</Link></li>
        <li><Link to="/Feedback" className="student-link">View Feedback</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
