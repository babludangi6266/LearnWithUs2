
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Ballpit from './Ballpit';
import CoursesSection from './CoursesSection';
import PartnerSection from './PartnerSection';
import Footer from './Footer';

import WhyChooseUsSection from './WhyChooseUsSection ';
import '../styles/main.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/GetStartPage');
  };

  const heroContent = [
    { title: 'Empowering Education', subtitle: 'Transforming the way you learn', cta: 'Start Learning Now' },
    { title: 'Learn at Your Own Pace', subtitle: 'Flexibility to match your schedule', cta: 'Explore Courses' },
    { title: 'Enhance Your Skills', subtitle: 'Learn from industry experts', cta: 'Join Today' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeStyles = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    reset: true,
    delay: 200,
    onRest: () => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
      }, 4000);
    },
  });

  

  useEffect(() => {
    const partnersWrapper = document.querySelector('.partners-scroll-wrapper');
    if (partnersWrapper) {
      const handleMouseMove = (e) => {
        const { clientX } = e;
        const scrollPercentage = clientX / window.innerWidth;
        partnersWrapper.scrollLeft = scrollPercentage * (partnersWrapper.scrollWidth - window.innerWidth);
      };
      partnersWrapper.addEventListener('mousemove', handleMouseMove);
      return () => partnersWrapper.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="home-container" role="main">
      <header className="header" role="banner">
        <nav className="nav" aria-label="Main navigation">
          <ul>
            <li><Link to="/student-login" className="nav-link" aria-label="Student Portal">Student Portal</Link></li>
            <li><Link to="/AdminLoginPage" className="nav-link" aria-label="Admin Portal">Admin Portal</Link></li>
            <li><Link to="/missionaries-game" className="nav-link" aria-label="Test Your IQ">Test Your IQ</Link></li>
            <li>
              <a
                href="https://ko-fi.com/babludangi"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link kofi-btn"
                aria-label="Support LearnWithUs"
              >
                <img
                  height="32"
                  style={{ border: '0px' }}
                  src="https://storage.ko-fi.com/cdn/kofi2.png?v=3"
                  alt="Support LearnWithUs"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="ballpit-overlay">
            <Ballpit
              count={50}
              gravity={0.7}
              friction={0.8}
              wallBounce={0.95}
              followCursor={true}
              colors={['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251']}
            />
          </div>
          <animated.div style={fadeStyles} className="hero-content">
            <h1 id="hero-title">{heroContent[currentIndex].title}</h1>
            <p>{heroContent[currentIndex].subtitle}</p>
            <button
              className="btn-home"
              onClick={handleGetStarted}
              aria-label={heroContent[currentIndex].cta}
            >
              {heroContent[currentIndex].cta}
            </button>
          </animated.div>
        </section>
        <WhyChooseUsSection />
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
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
    <section className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">What Our Users Say</h2>
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
      <FaQuoteLeft className="quote-icon left" aria-hidden="true" />
      <img
        src={imgSrc}
        alt={`${name} from ${company}`}
        className="testimonial-image"
        loading="lazy"
      />
      <p className="testimonial-quote">{quote}</p>
      <FaQuoteRight className="quote-icon right" aria-hidden="true" />
      <div className="testimonial-info">
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-company">({experience}) at {company}</span>
      </div>
    </div>
  </div>
);

export default HomePage;

