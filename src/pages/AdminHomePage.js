import React from 'react';
import Navbar from '../pages/AdminNavbar';
import '../styles/adminHomePage.css';

const AdminHomePage = () => {
  return (
    <div className="admin-home-container">
      <header className="admin-header">
        <Navbar />
      </header>
      <div className="background-slideshow-admin">
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg1.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg2.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg3.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg4.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg5.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg6.jpg')})` }}></div>
      </div>
      <main className="admin-main">
        <h2>Admin Dashboard</h2>
        <p>Welcome to the Admin Portal. Use the links above to manage phases, questions, and student data.</p>
      </main>
    </div>
  );
};

export default AdminHomePage;
