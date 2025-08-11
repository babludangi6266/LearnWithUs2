import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Tilt } from 'react-tilt';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/ProjectsPage.css';

const MotivationPage = () => {
  const sections = [
    {
      type: 'intro',
      title: 'Fuel Your Coding Adventure',
      description: 'Kickstart your journey to becoming a coding master with practical tips and inspiration.',
      extendedDescription: 'Coding is a superpower that unlocks endless possibilities. Whether you are a beginner or a seasoned developer, these strategies will help you stay motivated and achieve your goals.',
      cta: 'Start Coding Now',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      type: 'quotes',
      title: 'Inspiration from Tech Pioneers',
      description: 'Let these words from industry legends spark your passion for coding.',
      quotes: [
        { text: 'Code is poetry for machines.', author: 'Margaret Hamilton' },
        { text: 'Programming is about solving puzzles.', author: 'Linus Torvalds' },
        { text: 'Write code that changes the world.', author: 'Mark Zuckerberg' },
      ],
    },
    {
      type: 'techniques',
      title: 'Proven Coding Strategies',
      description: 'Master coding with these effective techniques to boost your skills.',
      cards: [
        {
          title: 'Code Daily',
          shortDescription: 'Build skills through consistent practice.',
          longDescription: 'Commit to coding every day, even for 30 minutes, to develop fluency and confidence. Use platforms like HackerRank or GitHub to track progress.',
          steps: ['Set a daily coding goal', 'Use online platforms', 'Review and refactor code'],
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdlYnNpdGV8ZW58MHx8MHx8fDA%3D',
        },
        {
          title: 'Join Communities',
          shortDescription: 'Learn from peers and mentors.',
          longDescription: 'Engage with coding communities on Discord, Reddit, or Stack Overflow to share knowledge, ask questions, and stay inspired.',
          steps: ['Join a coding Discord', 'Participate in forums', 'Attend virtual meetups'],
          image: 'https://media.istockphoto.com/id/1211574810/photo/small-business-owner.webp?a=1&b=1&s=612x612&w=0&k=20&c=CxCcuJJ7U3CqQbu-JkoYgiGWHNL-Ucm5Dibi5E-6CaM=',
        },
        {
          title: 'Teach Others',
          shortDescription: 'Solidify your knowledge by teaching.',
          longDescription: 'Explain concepts to peers or write tutorials to deepen your understanding and contribute to the community.',
          steps: ['Write a blog post', 'Create a tutorial video', 'Mentor a beginner'],
          image: 'https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=bo9P4L3HQM2cipWrh8W7_HwPYNnUdHKqucWnduQLge0=',
        },
      ],
    },
    {
      type: 'video',
      title: 'Motivational Video',
      description: 'Watch this video to ignite your coding passion.',
      videoUrl: 'https://youtu.be/oX7OduG1YmI?si=VBeG8jLcWKnDzwyW',
    },
    {
      type: 'gallery',
      title: 'Visual Motivation',
      description: 'Explore images that capture the thrill of coding.',
      items: [
        {
          title: 'Code Flow',
          description: 'Immerse yourself in the rhythm of coding.',
          image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdlYnNpdGV8ZW58MHx8MHx8fDA%3D',
        },
        {
          title: 'Tech Vibes',
          description: 'Feel the energy of innovation.',
          image: 'https://images.unsplash.com/photo-1735197087482-9bda482f6204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVjaCUyMFZpYmVzfGVufDB8fDB8fHww',
        },
        {
          title: 'Workspace Glow',
          description: 'Create in a space that inspires.',
          image: 'https://images.unsplash.com/photo-1752391873033-839ff56ff6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29ya3NwYWNlJTIwR2xvd3xlbnwwfHwwfHx8MA%3D%3D',
        },
      ],
    },
  ];

  return (
    <div className="motivation-container">
      <Carousel
        showThumbs={false}
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showArrows
        className="motivation-carousel"
      >
        {sections.map((section, index) => (
          <section key={index} className={`motivation-section ${section.type}-section`} aria-labelledby={`${section.type}-title`}>
            <div className="section-content">
              <h2 id={`${section.type}-title`}>{section.title}</h2>
              <p className="section-description">{section.description}</p>
              {section.type === 'intro' && (
                <>
                  <p className="extended-description">{section.extendedDescription}</p>
                  <button className="cta-button" aria-label={section.cta}>
                    {section.cta}
                  </button>
                  <img
                    src={section.image}
                    alt="Intro background"
                    loading="lazy"
                    className="section-image"
                  />
                </>
              )}
              {section.type === 'quotes' && (
                <div className="quote-grid">
                  {section.quotes.map((quote, idx) => (
                    <Tilt key={idx} className="quote-card" options={{ max: 25, scale: 1.05 }}>
                      <blockquote>
                        "{quote.text}"
                        <cite>- {quote.author}</cite>
                      </blockquote>
                    </Tilt>
                  ))}
                </div>
              )}
              {section.type === 'techniques' && (
                <div className="techniques-grid">
                  {section.cards.map((card, idx) => (
                    <Tilt key={idx} className="technique-card" options={{ max: 25, scale: 1.05 }}>
                      <div className="technique-front">
                        <h3>{card.title}</h3>
                        <p>{card.shortDescription}</p>
                      </div>
                      <div
                        className="technique-back"
                        style={{ backgroundImage: `url(${card.image})` }}
                        aria-hidden="true"
                      >
                        <div className="technique-back-content">
                          <h3>{card.title}</h3>
                          <p>{card.longDescription}</p>
                          <ul className="technique-steps">
                            {card.steps.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Tilt>
                  ))}
                </div>
              )}
              {section.type === 'video' && (
                <iframe
                  className="learning-video"
                  width="800"
                  height="450"
                  src={section.videoUrl}
                  title="Motivational coding video"
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              {section.type === 'gallery' && (
                <div className="gallery-grid">
                  {section.items.map((item, idx) => (
                    <Tilt key={idx} className="gallery-item" options={{ max: 25, scale: 1.05 }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="gallery-image"
                      />
                      <div className="gallery-overlay">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </Tilt>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </Carousel>
      <footer className="footer">
        <p>&copy; 2025 LearnWithUs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MotivationPage;