import React, { useEffect , useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import '../styles/main.css';

import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
 
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/GetStartPage'); 
  };


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
        <section className="hero" style={{ backgroundImage: `url(${require('../assets/herobg.jpg')})` }}>
          <h1>Empowering Education</h1>
          <p>Transforming the way you learn</p>
          <button className="btn-home" onClick={handleGetStarted}>Get Started</button>
        </section>

        <section className="features">
          <h2>Our Features</h2>
          <div className="features-container">
            <div className="feature-card">
              <div className="card-front">
                <img src={require('../assets/secure.jpg')} alt="Secure Learning" />
              </div>
              <div className="card-back">
              <h3>Secure Learning</h3>
                <p>Our platform ensures a safe and secure learning environment.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="card-front">
                <img src={require('../assets/personalized.jpg')} alt="Personalized Learning" />
              </div>
              <div className="card-back">
                <h3>Personalized Learning</h3>
                <p>Our AI-powered platform provides personalized learning experiences.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="card-front">
                <img src={require('../assets/data-insight.jpg')} alt="Data-Driven Insights" />
              </div>
              <div className="card-back">
                <h3>Data-Driven Insights</h3>
                <p>Get actionable insights to improve learning outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="courses">
          <h2>Courses We Offer</h2>
          <ul>
            <div className='course-we-offer-card'>
            <li>
              <h3>Full-Stack Development</h3>
              <p>Master the art of full-stack development with our comprehensive course.</p>
            </li>
            </div>
            <div  className='course-we-offer-card'>
            <li>
              <h3>Data Science</h3>
              <p>Learn data science from the ground up with our expert-led curriculum.</p>
            </li>
            </div>
            <div  className='course-we-offer-card'>
            <li>
              <h3>AI & Machine Learning</h3>
              <p>Dive into the world of AI and ML with hands-on projects and real-world applications.</p>
            </li>
            </div>
            <div  className='course-we-offer-card'>
            <li>
              <h3>Cloud Computing</h3>
              <p>Gain expertise in cloud technologies with our in-depth cloud computing course.</p>
            </li>
            </div>
          </ul>
        </section>

        <div className="partner-section">
          <h2>Our Partners</h2>
          <div className="partners-scroll-wrapper">
            <div className="partners-grid">
              <div className="partner-card">
                <img src={require('../assets/snehil2.jpg')} alt="Partner 1" className="partner-photo" />
                <h3>Snehil</h3>
                <p>Experience: 5 years</p>
              </div>
              <div className="partner-card">
                <img src={require('../assets/dev.jpg')} alt="Partner 2" className="partner-photo" />
                <h3>Devendra</h3>
                <p>Experience: 7 years at Google ( M.tech BIITS Pillani )</p>
              </div>
              <div className="partner-card">
                <img src={require('../assets/snehil2.jpg')} alt="Partner 3" className="partner-photo" />
                <h3>Bablu</h3>
                <p>Experience: 7 years</p>
              </div>
              <div className="partner-card">
                <img src={require('../assets/bajrang.jpg')} alt="Partner 4" className="partner-photo" />
                <h3>Bajrang</h3>
                <p>Experience: 4 years ( IBM )</p>
              </div>
              <div className="partner-card">
                <img src={require('../assets/snehil2.jpg')} alt="Partner 5" className="partner-photo" />
                <h3>Bablu</h3>
                <p>Experience: 7 years</p>
              </div>
            </div>
          </div>
        </div>

        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <ul>
            <li>
              <img src={require('../assets/snehil2.jpg')} alt="Testimonial 1" />
              <p>"LearnWithUs has revolutionized the way I learn. It's amazing!"</p>
              <span>-Snehil ( 4+ Year Experience ) at Google</span>
            </li>
            <li>
              <img src={require('../assets/snehil.jpg')} alt="Testimonial 2" />
              <p>"I've seen a significant improvement in my grades since using LearnWithUs."</p>
              <span>- Devendra ( 10+ Year Experience ) at Microsoft</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
        <div class="founder-section">
        <img src={require('../assets/bablu.png')} class="founder-photo" />
        <div class="founder-info">
      <h3>Founder Name</h3>
      <p>Our founder Bablu Dangi established this organization with the vision of empowering learners through technology. With a background in Software Development , Bablu has been dedicated to improving education accessibility for all.</p>
    </div>
  </div>
          <div className="footer-social">
            <h3>Connect with Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://wa.me/+916266007182" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/bablu-dangi-ba8a01259" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <p>&copy; 2024 LearnWithUs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
