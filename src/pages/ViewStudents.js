import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../pages/AdminNavbar';
import '../styles/adminHomePage.css';
import '../styles/viewStudents.css';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://learnwithus-f2tz.onrender.com/api/student/students'); // Adjust the URL if necessary
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
        alert('Error fetching students');
      }
    };

    fetchStudents();
  }, []);

  const handleSendFeedback = async (studentId) => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
  
      const response = await axios.post(
        'https://learnwithus-f2tz.onrender.com/api/student/feedback', 
        {
          studentId,
          message: feedbackMessage,
        },
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '', // Add the token to the Authorization header
          },
        }
      );
      alert('Feedback sent successfully!');
      setFeedbackMessage(''); // Clear the message
    } catch (error) {
      console.error('Error sending feedback:', error);
      alert('Error sending feedback');
    }
  };
  return (
    <>
    <div>
    <AdminNavbar/>
  </div>
    <div className="view-students-container">
    
      <h2>All Students</h2>
      {students.length > 0 ? (
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Registration Date</th>
              <th>Send Feedback</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{new Date(student.createdAt).toLocaleDateString()}</td>
                <td>
                  <input
                    type="text"
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder="Enter feedback"
                  />
                  <button onClick={() => handleSendFeedback(student._id)}>
                    Send
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found.</p>
      )}
    </div>
    </>
  );
};

export default ViewStudents;
