
import React from 'react';
import Slider from 'react-slick';
import { FiAward, FiUsers, FiTrendingUp, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FiAward />,
      title: 'Industry-Recognized Learning',
      description: 'Curriculum crafted with top tech firms.',
      color: '#6366F1',
    },
    {
      icon: <FiUsers />,
      title: 'Mentor Network',
      description: '1:1 guidance from FAANG experts.',
      color: '#10B981',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Career Accelerator',
      description: '90% students grow careers in 6 months.',
      color: '#F59E0B',
    },
    {
      icon: <FiCode />,
      title: 'Project-Based',
      description: 'Build real-world portfolio projects.',
      color: '#EC4899',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="why-choose-us-container" aria-labelledby="why-choose-us-title">
      <div className="left-section">
        <div className="content-wrapper">
          <div className="section-header">
            <motion.span
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              OUR DIFFERENCE
            </motion.span>
            <motion.h2
              id="why-choose-us-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Learn Without Limits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Redefining tech education with immersive, outcome-focused learning.
            </motion.p>
          </div>

          <Slider {...sliderSettings} className="features-slider">
            {features.map((feature, index) => (
              <motion.div
                className="feature-card-wrapper"
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <div className="feature-card" style={{ borderColor: `${feature.color}33` }}>
                  <div className="icon-wrapper" style={{ backgroundColor: `${feature.color}20` }}>
                    {React.cloneElement(feature.icon, { style: { color: feature.color, fontSize: '2rem' } })}
                  </div>
                  <div className="feature-content">
                    <h3 style={{ color: feature.color }}>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="right-section">
        <div className="right-content">
          <motion.div
            className="stats-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Why We Stand Out</h3>
            <div className="stats-grid">
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-value">95%</div>
                <div className="stat-label">Completion Rate</div>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="stat-value">4.9/5</div>
                <div className="stat-label">Student Rating</div>
              </motion.div>
            </div>
            <motion.div
              className="cta-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="emoji">🚀</div>
              <p>Join 10,000+ students who transformed their careers.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

