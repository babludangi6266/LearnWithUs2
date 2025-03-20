import React from 'react';
import { FaCode, FaChartLine, FaRobot, FaCloud } from 'react-icons/fa'; // Icons for courses

const CourseCard = ({ title, description, icon: Icon }) => (
  <div className="course-card">
    <div className="course-icon">
      <Icon />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="course-button">Learn More</button>
  </div>
);

const CoursesSection = () => {
  const courses = [
    {
      title: 'Full-Stack Development',
      description: 'Master the art of full-stack development with our comprehensive course.',
      icon: FaCode,
    },
    {
      title: 'Data Science',
      description: 'Learn data science from the ground up with our expert-led curriculum.',
      icon: FaChartLine,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Dive into the world of AI and ML with hands-on projects and real-world applications.',
      icon: FaRobot,
    },
    {
      title: 'Cloud Computing',
      description: 'Gain expertise in cloud technologies with our in-depth cloud computing course.',
      icon: FaCloud,
    },
  ];

  return (
    <section className="courses">
      <h2>Courses We Offer</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;