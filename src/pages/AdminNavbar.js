
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/adminnavbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Admin Portal</h1>
      </div>
      <ul className="navbar-links">

        <li><Link to="/ManagePhases" className="admin-link">Manage Phases</Link></li>
        <li><Link to="/admin-dashboard" className="admin-link">Home</Link></li>
        <li><Link to="/ManageQuestions" className="admin-link">Manage Questions</Link></li>
        <li><Link to="/ViewStudents" className="admin-link">View Students</Link></li>
        <li><Link to="/AddNotes" className="admin-link">Add Notes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
