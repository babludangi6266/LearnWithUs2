import React from 'react';
import { motion } from 'framer-motion';

const PartnerSection = () => {
  const partners = [
    {
      imgSrc: require('../assets/shivi.jpg'),
      name: 'Shivi',
      role: 'Tech Mentor',
      expertise: 'Full-Stack Development',
      experience: '5+ Years',
    },
    {
      imgSrc: require('../assets/dev.jpg'),
      name: 'Devendra',
      role: 'AI Specialist',
      expertise: 'Machine Learning',
      experience: '7+ Years',
    },
    {
      imgSrc: require('../assets/snehil2.jpg'),
      name: 'Bablu',
      role: 'DevOps Engineer',
      expertise: 'Cloud Infrastructure',
      experience: '7+ Years',
    },
    {
      imgSrc: require('../assets/bajrang.jpg'),
      name: 'Bajrang',
      role: 'Cybersecurity Expert',
      expertise: 'Network Security',
      experience: '4+ Years',
    },
    // Add more partners
  ];

  return (
    <div className="partner-section">
      <h2>Our Industry Experts</h2>
      <p className="section-description">
        Learn from the best in the industry. Our mentors bring years of experience and expertise to help you succeed.
      </p>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <motion.div 
            key={index}
            className="partner-card"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img 
              src={partner.imgSrc} 
              alt={partner.name} 
              className="partner-avatar"
            />
            <h3>{partner.name}</h3>
            <p className="role">{partner.role}</p>
            <div className="expertise">
              <span>🔧</span>
              <p>{partner.expertise}</p>
            </div>
            <div className="experience">
              <span>📅</span>
              <p>{partner.experience}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;