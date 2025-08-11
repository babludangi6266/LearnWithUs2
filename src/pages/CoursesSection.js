import React from 'react';
import { motion } from 'framer-motion';
import '../styles/main.css';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Web Development',
      shortDescription: 'Build modern web applications.',
      longDescription: 'Master HTML, CSS, JavaScript, React, and Node.js to create responsive, scalable websites.',
      details: {
        duration: '12 weeks',
        level: 'Beginner to Intermediate',
        skills: 'Frontend & Backend Development',
        instructor: 'John Doe, Senior Developer',
      },
      image: 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Data Science',
      shortDescription: 'Analyze data and predict trends.',
      longDescription: 'Learn Python, Pandas, TensorFlow, and data visualization to solve real-world problems.',
      details: {
        duration: '10 weeks',
        level: 'Intermediate',
        skills: 'Machine Learning & Data Analysis',
        instructor: 'Jane Smith, Data Scientist',
      },
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGF0YSUyMFNjaWVuY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'UI/UX Design',
      shortDescription: 'Design intuitive interfaces.',
      longDescription: 'Master Figma, user research, and prototyping to create user-centered designs.',
      details: {
        duration: '8 weeks',
        level: 'Beginner',
        skills: 'Prototyping & User Research',
        instructor: 'Alex Brown, UX Designer',
      },
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFVJJTJGVVglMjBEZXNpZ258ZW58MHx8MHx8fDA%3D',
    },
  ];

  return (
    <section className="courses" aria-labelledby="courses-title">
      <h2 id="courses-title">Courses We Offer</h2>
      <p className="section-description">Discover our immersive courses to ignite your tech career.</p>
      <div className="course-grid">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="course-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-front">
              <h3>{course.title}</h3>
              <p className="short-description">{course.shortDescription}</p>
              <button className="course-button" aria-label={`Explore ${course.title}`}>
                Explore Course
              </button>
            </div>
            <div
              className="card-back"
              style={{ backgroundImage: `url(${course.image})` }}
              aria-hidden="true"
            >
              <div className="card-back-content">
                <h3>{course.title}</h3>
                <p className="long-description">{course.longDescription}</p>
                <ul className="course-details">
                  <li><strong>Duration:</strong> {course.details.duration}</li>
                  <li><strong>Level:</strong> {course.details.level}</li>
                  <li><strong>Skills:</strong> {course.details.skills}</li>
                  <li><strong>Instructor:</strong> {course.details.instructor}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;