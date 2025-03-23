import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/studentHomePage.css';
import Navbar from './Navbar';

const StudentHomePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://learnwithus-f2tz.onrender.com/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="student-home-container">
      <header className="student-header">
        <Navbar user={user} />
      </header>

      {/* Welcome Section */}
      {user && (
        <div className="welcome-banner">
          <div className="welcome-content">
            <h1>Welcome back, {user.name}! 👋</h1>
            <p>Continue your learning journey with personalized recommendations</p>
          </div>
        </div>
      )}

      {/* Updated Background slideshow */}
      <div className="slideshow">
        <div className="slide-overlay"></div>
        <div className="slide-images">
          <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg1.jpg')})` }}></div>
          <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg2.jpg')})` }}></div>
          <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg3.jpg')})` }}></div>
        </div>
        <div className="quote-container">
          <blockquote className="quote-text">
            "The best way to predict the future is to invent it."
            <span className="quote-author">— Alan Kay</span>
          </blockquote>
        </div>
      </div>

      {/* Updated Content Section */}
      <section className="content-section">
        <h2 className="section-title">Discover the Future of Tech</h2>
        <div className="grid-layout">
          {[
            { title: 'AI & Machine Learning', icon: '🤖', 
              content: 'Explore the latest AI trends, including machine learning models...' },
            { title: 'Data Science', icon: '📊', 
              content: 'Analyze and visualize large data sets. Create projects...' },
            { title: 'Blockchain', icon: '⛓️', 
              content: 'Understand how blockchain is revolutionizing secure...' },
            { title: 'Cryptocurrency', icon: '💰', 
              content: 'Dive into the world of digital currencies and develop...' }
          ].map((item, index) => (
            <div className="grid-item" key={index}>
              <div className="grid-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Updated Featured Projects Section */}
      <section className="featured-projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-carousel">
          {[
            { image: 'bg1.jpg', title: 'AI-powered Chatbot', 
              desc: 'Build a conversational AI chatbot using NLP and ML' },
            { image: 'bg2.jpg', title: 'Blockchain Supply Chain', 
              desc: 'Decentralized supply chain management system' },
            { image: 'bg3.jpg', title: 'Image Classification', 
              desc: 'ML model using convolutional neural networks' }
          ].map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image" 
     style={{ backgroundImage: `url(${require(`../assets/${project.image}`)})` }}>
                <div className="project-overlay"></div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <button className="view-project-btn">View Project →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Building?</h2>
          <p>Join thousands of students already creating amazing projects</p>
          <Link to="/get-started" className="cta-button">
            Start Your Project Now →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudentHomePage;