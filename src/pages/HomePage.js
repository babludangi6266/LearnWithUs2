
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/main.css';

import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();
 
  const handleGetStarted = () => {
    navigate('/GetStartPage');
  };

  const heroContent = [
    { title: 'Empowering Education', subtitle: 'Transforming the way you learn' },
    { title: 'Learn at Your Own Pace', subtitle: 'Flexibility to match your schedule' },
    { title: 'Enhance Your Skills', subtitle: 'Learn from industry experts' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeStyles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: false,
    delay: 200,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(intervalId);
  }, [heroContent.length]);



  useEffect(() => {
    const partnersWrapper = document.querySelector('.partners-scroll-wrapper');

    if (partnersWrapper) {
      partnersWrapper.addEventListener('mousemove', (e) => {
        const { clientX } = e;
        const scrollPercentage = clientX / window.innerWidth;
        partnersWrapper.scrollLeft = scrollPercentage * (partnersWrapper.scrollWidth - window.innerWidth);
      });

      return () => {
        partnersWrapper.removeEventListener('mousemove', () => {});
      };
    }
  }, []);

  

  return (
    <div className="home-container">
      <header className="header">
        <nav className="nav">
          <ul>
            <li><Link to="/student-login" className="nav-link">Student Portal</Link></li>
            <li><Link to="/AdminLoginPage" className="nav-link">Admin Portal</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main">
      <animated.section style={fadeStyles} className="hero">
      <h1>{heroContent[currentIndex].title}</h1>
      <p>{heroContent[currentIndex].subtitle}</p>
      <button className="btn-home" onClick={handleGetStarted}>Get Started</button>
    </animated.section>

        <section className="features">
          <h2>Our Features</h2>
          <div className="features-container">
            <FeatureCard
              imgSrc={require('../assets/personalized.jpg')}
              altText="Secure Learning"
              title="Secure Learning"
              description="Our platform ensures a safe and secure learning environment."
            />
            <FeatureCard
              imgSrc={require('../assets/personalized.jpg')}
              altText="Personalized Learning"
              title="Personalized Learning"
              description="Our AI-powered platform provides personalized learning experiences."
            />
            <FeatureCard
              imgSrc={require('../assets/data-insight.jpg')}
              altText="Data-Driven Insights"
              title="Data-Driven Insights"
              description="Get actionable insights to improve learning outcomes."
            />
          </div>
        </section>

        <section className="courses">
          <h2>Courses We Offer</h2>
          <ul className="course-list">
            <CourseCard title="Full-Stack Development" description="Master the art of full-stack development with our comprehensive course." />
            <CourseCard title="Data Science" description="Learn data science from the ground up with our expert-led curriculum." />
            <CourseCard title="AI & Machine Learning" description="Dive into the world of AI and ML with hands-on projects and real-world applications." />
            <CourseCard title="Cloud Computing" description="Gain expertise in cloud technologies with our in-depth cloud computing course." />
          </ul>
        </section>

        <PartnerSection />

        <TestimonialsSection />

        <Footer />
      </main>
    </div>
  );
};

const FeatureCard = ({ imgSrc, altText, title, description }) => (
  <div className="feature-card">
    <div className="card-front">
    <LazyLoadImage
        alt={altText}
        src={imgSrc} // use normal <img> attributes as props
        effect="blur" // This adds a blur effect while loading
      />
    </div>
    <div className="card-back">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const CourseCard = ({ title, description }) => (
  <div className="course-we-offer-card">
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  </div>
);

const PartnerSection = () => (
  <div className="partner-section">
    <h2>Our Partners</h2>
    <div className="partners-scroll-wrapper">
      <div className="partners-grid">
        <PartnerCard imgSrc={require('../assets/snehil2.jpg')} name="Snehil" experience="5 years" />
        <PartnerCard imgSrc={require('../assets/dev.jpg')} name="Devendra" experience="7 years at Google (M.Tech BITS Pilani)" />
        <PartnerCard imgSrc={require('../assets/snehil2.jpg')} name="Bablu" experience="7 years" />
        <PartnerCard imgSrc={require('../assets/bajrang.jpg')} name="Bajrang" experience="4 years (IBM)" />
      </div>
    </div>
  </div>
);

const PartnerCard = ({ imgSrc, name, experience }) => (
  <div className="partner-card">
    <img src={imgSrc} alt={name} className="partner-photo" />
    <h3>{name}</h3>
    <p>Experience: {experience}</p>
  </div>
);

const TestimonialsSection = () => (
  <section className="testimonials">
    <h2>What Our Users Say</h2>
    <ul>
      <Testimonial imgSrc={require('../assets/snehil2.jpg')} name="Snehil" company="Google" experience="4+ Year Experience" />
      <Testimonial imgSrc={require('../assets/snehil.jpg')} name="Devendra" company="Microsoft" experience="10+ Year Experience" />
      <Testimonial imgSrc={require('../assets/bajrang.jpg')} name="Bajrang" company="IBM" experience="4+ Year Experience" />
    </ul>
  </section>
);

const Testimonial = ({ imgSrc, name, company, experience }) => (
  <li>
    <img src={imgSrc} alt={name} />
    <p>"LearnWithUs provides an excellent learning experience. Highly recommended!"</p>
    <span>- {name} ({experience}) at {company}</span>
  </li>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="founder-section">
        <img src={require('../assets/bablu.png')} className="founder-photo" alt="Founder Bablu Dangi" />
        <div className="founder-info">
          <h3>Bablu Dangi</h3>
          <p>Our founder Bablu Dangi established this organization with the vision of empowering learners through technology. With a background in Software Development, Bablu is dedicated to improving education accessibility for all.</p>
        </div>
      </div>
      <div className="footer-social">
        <h3>Connect with Us</h3>
        <div className="social-icons">
          <SocialIcon href="https://www.instagram.com" icon={FaInstagram} />
          <SocialIcon href="https://wa.me/+916266007182" icon={FaWhatsapp} />
          <SocialIcon href="https://twitter.com" icon={FaTwitter} />
          <SocialIcon href="https://linkedin.com/in/bablu-dangi-ba8a01259" icon={FaLinkedin} />
        </div>
      </div>
    </div>
    <p>&copy; 2024 LearnWithUs. All rights reserved.</p>
  </footer>
);

const SocialIcon = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="social-icon" />
  </a>
);

export default HomePage;
