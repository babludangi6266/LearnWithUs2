
import React from 'react';
import Slider from 'react-slick';
import '../styles/main.css';

const PartnerSection = () => {
  const partners = [
    {
      name: 'John Doe',
      role: 'Senior Developer',
      avatar: require('../assets/shivi.jpg'),
      expertise: 'React & Node.js',
      experience: '8+ Years',
    },
    {
      name: 'Jane Smith',
      role: 'Data Scientist',
      avatar: require('../assets/snehil2.jpg'),
      expertise: 'Python & AI',
      experience: '6+ Years',
    },
    {
      name: 'Alex Brown',
      role: 'UI/UX Designer',
      avatar: require('../assets/dev.jpg'),
      expertise: 'Figma & Adobe XD',
      experience: '5+ Years',
    },
    {
      name: 'Alex Brown',
      role: 'UI/UX Designer',
      avatar: require('../assets/dev.jpg'),
      expertise: 'Figma & Adobe XD',
      experience: '5+ Years',
    },
    {
      name: 'Alex Brown',
      role: 'UI/UX Designer',
      avatar: require('../assets/dev.jpg'),
      expertise: 'Figma & Adobe XD',
      experience: '5+ Years',
    },
    {
      name: 'Alex Brown',
      role: 'UI/UX Designer',
      avatar: require('../assets/dev.jpg'),
      expertise: 'Figma & Adobe XD',
      experience: '5+ Years',
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
    <section className="partner-section" aria-labelledby="partners-title">
      <h2 id="partners-title">Our Industry Experts</h2>
      <p className="section-description">Learn from the best in the industry.</p>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="partner-card-wrapper">
            <div className="partner-card">
              <img
                src={partner.avatar}
                alt={`${partner.name}, ${partner.role}`}
                className="partner-avatar"
                loading="lazy"
              />
              <h3>{partner.name}</h3>
              <p className="role">{partner.role}</p>
              <div className="expertise">
                <span>💡</span> {partner.expertise}
              </div>
              <div className="experience">
                <span>🏆</span> {partner.experience}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PartnerSection;