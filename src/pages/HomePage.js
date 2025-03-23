
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import Slider from 'react-slick';
import Ballpit from './Ballpit';
import CoursesSection from './CoursesSection';
import '../styles/main.css';
import PartnerSection from './PartnerSection';

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
      <section className="hero">
          {/* Ballpit Overlay */}
          <div className="ballpit-overlay">
    <Ballpit
      count={50}
      gravity={0.7}
      friction={0.8}
      wallBounce={0.95}
      followCursor={true}
      colors={['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251']} // Add colorful hex codes
    />
  </div>

          {/* Hero Content */}
          <animated.div style={fadeStyles} className="hero-content">
            <h1>{heroContent[currentIndex].title}</h1>
            <p>{heroContent[currentIndex].subtitle}</p>
            <button className="btn-home" onClick={handleGetStarted}>Get Started</button>
          </animated.div>
          </section>
          <CoursesSection />

        <PartnerSection />

        <TestimonialsSection />

        <Footer />
      </main>
    </div>
  );
};
const TestimonialsSection = () => {
  const testimonials = [
    {
      imgSrc: require('../assets/kerry.jpg'),
      name: 'Kerry',
      company: 'Google',
      experience: '4+ Year Experience',
      quote: 'LearnWithUs provides an excellent learning experience. Highly recommended!',
    },
    {
      imgSrc: require('../assets/bob.jpg'),
      name: 'Bob',
      company: 'Microsoft',
      experience: '10+ Year Experience',
      quote: 'The courses are well-structured and the instructors are top-notch.',
    },
    {
      imgSrc: require('../assets/sofia.jpg'),
      name: 'Sofia',
      company: 'IBM',
      experience: '4+ Year Experience',
      quote: 'I gained practical skills that helped me advance in my career.',
    },
    {
      imgSrc: require('../assets/amy_hirschi.jpg'),
      name: 'Amy Hirschi',
      company: 'Amazon',
      experience: '5+ Year Experience',
      quote: 'The platform is user-friendly and the content is up-to-date.',
    },
    {
      imgSrc: require('../assets/sofia.jpg'),
      name: 'Sofia',
      company: 'Facebook',
      experience: '3+ Year Experience',
      quote: 'I highly recommend LearnWithUs for anyone looking to upskill.',
    },
  ];

  // Settings for the slider
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 3000, // Auto-play speed
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Slider>
    </section>
  );
};

const Testimonial = ({ imgSrc, name, company, experience, quote }) => (
  <div className="testimonial-card">
    <div className="testimonial-content">
      <FaQuoteLeft className="quote-icon left" />
      <img src={imgSrc} alt={name} className="testimonial-image" />
      <p className="testimonial-quote">{quote}</p>
      <FaQuoteRight className="quote-icon right" />
      <div className="testimonial-info">
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-company">
          ({experience}) at {company}
        </span>
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Founder Section */}
        <div className="founder-section">
          <img
            src={require('../assets/bablu.png')}
            className="founder-photo"
            alt="Founder Bablu Dangi"
          />
          <div className="founder-info">
            <h3>Bablu Dangi</h3>
            <p>
              Bablu Dangi, the visionary founder of LearnWithUs, is a seasoned software developer with over a decade of experience in the tech industry. His passion for education and technology led him to create LearnWithUs, a platform dedicated to making high-quality education accessible to everyone. Bablu believes in the power of technology to transform lives and is committed to empowering learners worldwide.
            </p>
          </div>
        </div>

        {/* Social and Newsletter Section */}
        <div className="social-newsletter">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <SocialIcon href="https://www.instagram.com" icon={FaInstagram} />
            <SocialIcon href="https://wa.me/+916266007182" icon={FaWhatsapp} />
            <SocialIcon href="https://twitter.com" icon={FaTwitter} />
            <SocialIcon href="https://linkedin.com/in/bablu-dangi-ba8a01259" icon={FaLinkedin} />
          </div>

          {/* Newsletter Form */}
          <div className="newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                <FaEnvelope /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>&copy; 2025 LearnWithUs. All rights reserved.</p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
    <Icon />
  </a>
);

export default HomePage;
