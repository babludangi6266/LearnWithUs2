import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/studentHomePage.css';
import Navbar from './Navbar';

const StudentHomePage = () => {
  return (
    <div className="student-home-container">
      <header className="student-header">
        <Navbar />
      </header>

      {/* Background slideshow with quote */}
      <div className="slideshow">
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg1.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg2.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg3.jpg')})` }}></div>
        {/* More images can be added similarly */}
        <div className="quote-container">
          <blockquote className="quote-text">
            "The best way to predict the future is to invent it."
            <span className="quote-author">— Alan Kay</span>
          </blockquote>
        </div>
      </div>

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

      {/* Featured projects section */}
      <section className="featured-projects-section">
        <h2>Featured Projects</h2>
        <div className="project-grid-layout">
          <div className="project-grid-item">
            <img src={require('../assets/bg1.jpg')} alt="Project 1" />
            <h3>AI-powered Chatbot</h3>
            <p>Build a conversational AI chatbot using natural language processing and machine learning.</p>
          </div>
          <div className="project-grid-item">
            <img src={require('../assets/bg2.jpg')} alt="Project 2" />
            <h3>Blockchain-based Supply Chain Management</h3>
            <p>Develop a decentralized supply chain management system using blockchain technology.</p>
          </div>
          <div className="project-grid-item">
            <img src={require('../assets/bg3.jpg')} alt="Project 3" />
            <h3>Machine Learning-based Image Classification</h3>
            <p>Build a machine learning model to classify images using convolutional neural networks.</p>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="call-to-action-section">
        <h2>Get Started with Your Project</h2>
        <p>Join our community of innovators and start building your project today.</p>
        <Link to="/get-started" className="get-started-link">Get Started</Link>
      </section>
    </div>
  );
};

export default StudentHomePage;