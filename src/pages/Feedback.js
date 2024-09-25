import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/feedback.css'; 

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const studentId = localStorage.getItem('studentId'); // Or wherever you're storing the student ID
        const token = localStorage.getItem('token'); // Get the student token from local storage

        if (!studentId) {
          throw new Error('Student ID is missing');
        }

        const response = await axios.get(`https://learnwithus-f2tz.onrender.com/api/student/feedback/${studentId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token for authentication
          },
        });

        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        setError('Failed to fetch feedback');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  if (loading) {
    return <p>Loading feedback...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="student-feedback-container">
      <h2>Your Feedback</h2>
      {feedbacks && feedbacks.length > 0 ? (
        <ul className="feedback-list">
          {feedbacks.map((feedback, index) => (
            <li key={index} className="feedback-item">
              <p>{feedback.message}</p>
              <small>{new Date(feedback.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
};

export default Feedback;
