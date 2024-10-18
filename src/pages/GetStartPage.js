import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/ProjectsPage.css';

const MotivationPage = () => {
  return (
    <div className="motivation-container">
      <section className="intro-section">
        <h1>Empower Your Coding Journey</h1>
        <p>Unlock your potential with the power of code. Here are some tips and techniques to master the art of programming!</p>
        <button className="cta-button">Get Started Now</button>
      </section>

      <section className="quote-section">
        <h2>Thoughts of Legend on Coding</h2>
        <blockquote>
          "Everyone should learn to code because it teaches you how to think."
          <cite>- Steve Jobs</cite>
        </blockquote>
        <blockquote>
          "First, solve the problem. Then, write the code."
          <cite>- John Johnson</cite>
        </blockquote>
        <blockquote>
          "Code is like humor. When you have to explain it, it’s bad."
          <cite>- Cory House</cite>
        </blockquote>
      </section>

      <section className="techniques-section">
        <h2>Effective Learning Techniques</h2>
        <div className="techniques-grid">
          <div className="technique-card">
            <img 
              src={require('../assets/interactive.jpg')} 
              alt="Interactive Learning" 
              loading="lazy" // Lazy loading for image
            />
            <h3>Interactive Learning</h3>
            <p>Use platforms like Codecademy, LeetCode, and Codewars to practice coding in real time.</p>
          </div>
          <div className="technique-card">
            <img 
              src={require('../assets/secure.jpg')} 
              alt="Pair Programming" 
              loading="lazy" // Lazy loading for image
            />
            <h3>Pair Programming</h3>
            <p>Work with another developer to solve problems together. It’s a great way to learn from each other.</p>
          </div>
          <div className="technique-card">
            <img 
              src={require('../assets/get3.jpg')} 
              alt="Build Projects" 
              loading="lazy" // Lazy loading for image
            />
            <h3>Build Real Projects</h3>
            <p>Challenge yourself by creating projects like portfolio websites, apps, or even games.</p>
          </div>
        </div>
      </section>

      <section className="video-section">
        <h2>Watch and Learn</h2>
        <iframe
          className="learning-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NtfbWkxJTHw?si=eysMqmIckAEcy6TQ"
          title="YouTube video player"
          frameBorder="0"
          loading="lazy" // Lazy loading for iframe video
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img 
              src={require('../assets/get1.jpg')} 
              alt="Coding inspiration" 
              loading="lazy" // Lazy loading for image
            />
            <h2>Coding inspiration</h2>
          </div>
          <div className="gallery-item">
            <img 
              src={require('../assets/get2.jpg')} 
              alt="Tech talk" 
              loading="lazy" // Lazy loading for image
            />
            <h2>Tech talk</h2>
          </div>
          <div className="gallery-item">
            <img 
              src={require('../assets/get3.jpg')} 
              alt="Developer workspace" 
              loading="lazy" // Lazy loading for image
            />
            <h2>Developer workspace</h2>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 LearnWithUs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MotivationPage;
