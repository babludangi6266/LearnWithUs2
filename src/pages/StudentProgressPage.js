
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/studentProgress.css';

const StudentProgress = () => {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalScoreObtained, setTotalScoreObtained] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get('https://learnwithus-f2tz.onrender.com/api/student/progress', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        console.log('API Response:', response.data); // Log response data
        
        const progressData = response.data; // Response is the array itself
        // Calculate totalScoreObtained and progressPercentage based on response data if needed

        setProgress(progressData); // Set progress data
        // Assuming your backend isn't sending these separately, you may want to calculate them in the frontend:
        const totalObtained = progressData.reduce((acc, item) => acc + item.score, 0);
        const totalPossible = progressData.reduce((acc, item) => acc + (item.totalScore || 0), 0);
        const progressPercent = totalPossible ? (totalObtained / totalPossible) * 100 : 0;

        setTotalScoreObtained(totalObtained); // Set total score obtained
        setProgressPercentage(progressPercent); // Set progress percentage
      } catch (err) {
        console.error('Error fetching progress:', err);
        setError('Failed to fetch progress');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (loading) {
    return <p>Loading progress...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="student-progress-container">
      <h2>Your Progress</h2>
      {progress && progress.length > 0 ? (
        <div>
          <ul className="progress-list">
            {progress.map((phaseProgress, index) => (
              <li key={index} className="progress-item">
                <h3>{phaseProgress.phaseId?.name || `Phase ${index + 1}`}</h3>
                <p>
                  Score: {phaseProgress.score || 0} / {phaseProgress.totalScore || 'N/A'}
                </p>
              </li>
            ))}
          </ul>

          <div className="overall-progress">
            <p><strong>Total Score Obtained:</strong> {totalScoreObtained}</p>
            <p><strong>Overall Progress:</strong> {progressPercentage.toFixed(2)}%</p>
          </div>
        </div>
      ) : (
        <p>No progress available yet. Try completing some phases!</p>
      )}
    </div>
  );
};

export default StudentProgress;
