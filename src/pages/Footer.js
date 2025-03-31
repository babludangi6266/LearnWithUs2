import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaTwitter, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarker, 
  FaPhone, 
  FaArrowUp,
  FaTimes,
  FaCrown,
  FaTrophy,
  FaUsers,
  FaRocket,
  FaBlog,
  FaArrowRight,
  FaRegSadTear,
  FaPaperPlane,
  FaUser,
  FaBook
} from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  // State for dropdown toggles
  const [showAbout, setShowAbout] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [email, setEmail] = useState('');

  // Define images
  const ceoImage = require('../assets/bablu.png');
  const brandLogo = require('../assets/learnwithus-logo1-removebg-preview.png');
  
  // Sample blog posts data
  const blogPosts = [
    {
      title: "Top 5 Programming Languages to Learn in 2024",
      category: "Tech",
      date: "May 15, 2024",
      link: "#"
    },
    {
      title: "Career Transition Guide: From Non-Tech to Tech",
      category: "Career",
      date: "April 28, 2024",
      link: "#"
    },
    {
      title: "Mastering Web Development: Beginner to Pro",
      category: "Web Dev",
      date: "April 10, 2024",
      link: "#"
    }
  ];

  // Toggle functions
  const toggleAbout = (e) => {
    e.preventDefault();
    setShowAbout(!showAbout);
    setShowBlog(false);
    setShowCareers(false);
  };

  const toggleBlog = (e) => {
    e.preventDefault();
    setShowBlog(!showBlog);
    setShowAbout(false);
    setShowCareers(false);
  };

  const toggleCareers = (e) => {
    e.preventDefault();
    setShowCareers(!showCareers);
    setShowAbout(false);
    setShowBlog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add subscription logic here
    setEmail('');
  };

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img 
            src={brandLogo} 
            alt="LearnWithUs" 
            className="brand-logo" 
          />
         <div className="social-links">
  <a href="https://www.instagram.com/bablu_patel__9788" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://wa.me/6266007192" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />
  </a>
  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
  <a href="https://linkedin.com/in/bablu-dangi-ba8a01259" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
</div>
        </div>

        {/* Quick Links */}
        <div className="links-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/student-login" className="nav-link">
                <FaBook className="link-icon" />
                Courses
              </Link>
            </li>

            {/* About Us Dropdown */}
            <li className="dropdown-container">
              <a href="#!" className="nav-link" onClick={toggleAbout}>
                <FaUser className="link-icon" />
                About Us
              </a>
              {showAbout && (
                <div className="dropdown-content centered-dropdown">
                  <div className="dropdown-header">
                    <h5>About Our Company</h5>
                    <button className="close-btn" onClick={() => setShowAbout(false)}>
                      <FaTimes />
                    </button>
                  </div>
                  <div className="ceo-card">
                    <div className="ceo-image-container">
                      <img src={ceoImage} alt="CEO" className="ceo-photo" />
                      <div className="ceo-badge">
                        <FaCrown className="crown-icon" />
                      </div>
                    </div>
                    <div className="ceo-details">
                      <p className="ceo-name">Bablu Dangi</p>
                      <p className="ceo-title">Founder & CEO</p>
                      <div className="ceo-achievements">
                        <span><FaTrophy /> 10+ Years Experience</span>
                        <span><FaUsers /> 50k+ Students Trained</span>
                      </div>
                    </div>
                  </div>
                  <div className="platform-info">
                    <FaRocket className="platform-icon" />
                    <p>LearnWithUs: Transforming education through innovative tech solutions since 2020</p>
                  </div>
                </div>
              )}
            </li>

            {/* Blog Dropdown */}
            <li className="dropdown-container">
              <a href="#!" className="nav-link" onClick={toggleBlog}>
                <FaBlog className="link-icon" />
                Blog
              </a>
              {showBlog && (
                <div className="dropdown-content centered-dropdown blog-dropdown">
                  <div className="dropdown-header">
                    <h5>Latest Articles</h5>
                    <button className="close-btn" onClick={() => setShowBlog(false)}>
                      <FaTimes />
                    </button>
                  </div>
                  <div className="blog-posts">
                    {blogPosts.map((post, index) => (
                      <div key={index} className="blog-post">
                        <div className="post-meta">
                          <span className="post-category">{post.category}</span>
                          <span className="post-date">{post.date}</span>
                        </div>
                        <h6 className="post-title">{post.title}</h6>
                        <a href={post.link} className="read-more">
                          Read Article <FaArrowRight />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Careers Dropdown */}
            <li className="dropdown-container">
              <a href="#!" className="nav-link" onClick={toggleCareers}>
                <FaUser className="link-icon" />
                Careers
              </a>
              {showCareers && (
                <div className="dropdown-content centered-dropdown careers-dropdown">
                  <div className="dropdown-header">
                    <h5>Career Opportunities</h5>
                    <button className="close-btn" onClick={() => setShowCareers(false)}>
                      <FaTimes />
                    </button>
                  </div>
                  <div className="careers-content">
                    <FaRegSadTear className="careers-icon" />
                    <p>No current openings - check back soon!</p>
                    <div className="cta-section">
                      <p>Want to join our talent pool?</p>
                      <button className="cta-button">
                        <FaPaperPlane /> Submit Resume
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link to="/contact" className="nav-link">
                <FaEnvelope className="link-icon" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><FaMapMarker /> 3rd Floor ,Veda Complex Bawarkuaa , Indore</p>
            <p><FaPhone /> +91(626) 6007182</p>
            <p><FaEnvelope /> babludangi2024@gmail.com</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-section">
          <h4>Join Our Newsletter</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-section">
        <p>© 2024 LearnWithUs. All rights reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>

      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;