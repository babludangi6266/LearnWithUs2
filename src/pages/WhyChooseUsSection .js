import React from 'react';
import "../styles/WhyChooseUsSection.css";
import { FiAward, FiUsers, FiTrendingUp, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FiAward className="feature-icon" />,
      title: "Industry-Recognized Learning",
      description: "Our curriculum is designed with top tech companies to ensure relevance",
      color: "#6366F1"
    },
    {
      icon: <FiUsers className="feature-icon" />,
      title: "Mentor Network",
      description: "1:1 guidance from professionals at FAANG companies",
      color: "#10B981"
    },
    {
      icon: <FiTrendingUp className="feature-icon" />,
      title: "Career Accelerator",
      description: "90% of our students report career growth within 6 months",
      color: "#F59E0B"
    },
    {
      icon: <FiCode className="feature-icon" />,
      title: "Project-Based",
      description: "Build real portfolio pieces, not just theory",
      color: "#EC4899"
    }
  ];

  return (
    <div className="why-choose-us-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="content-wrapper">
          <div className="section-header">
            <motion.span 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              OUR DIFFERENCE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Learn Without Limits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're redefining tech education through immersive, outcome-focused learning
            </motion.p>
          </div>

          <div className="features-container">
  {features.map((feature, index) => (
    <motion.div
      className="feature-card"
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="icon-wrapper" style={{ backgroundColor: `${feature.color}20` }}>
        {React.cloneElement(feature.icon, { style: { color: feature.color, fontSize: '1.1rem' } })}
      </div>
      <div>
        <h3 style={{ color: feature.color, fontSize: '0.95rem' }}>{feature.title}</h3>
        <p style={{ fontSize: '0.8rem' }}>{feature.description}</p>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="right-content">
          <motion.div 
            className="stats-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Why We Stand Out</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">95%</div>
                <div className="stat-label">Completion Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">4.9/5</div>
                <div className="stat-label">Student Rating</div>
              </div>
            </div>
            <div className="cta-card">
              <div className="emoji">🚀</div>
              <p>Join 10,000+ students who transformed their careers with us</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;