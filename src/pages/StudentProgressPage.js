import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { FaChartPie, FaMedal, FaChevronRight } from 'react-icons/fa';
import '../styles/studentProgress.css';
const StudentProgress = () => {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const [expandedPhase, setExpandedPhase] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get('https://learnwithus-f2tz.onrender.com/api/student/progress', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const progressData = response.data;
        const totalObtained = progressData.reduce((acc, item) => acc + item.score, 0);
        const totalPossible = progressData.reduce((acc, item) => acc + (item.totalScore || 1), 0);
        const progressPercent = (totalObtained / totalPossible) * 100;

        setProgress(progressData);
        setTotalScore(totalObtained);
        setOverallProgress(progressPercent);
      } catch (err) {
        console.error('Error fetching progress:', err);
        setError('Failed to load progress data');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  const toggleExpand = (phaseIndex) => {
    setExpandedPhase(expandedPhase === phaseIndex ? null : phaseIndex);
  };

  if (loading) {
    return (
      <div className="progress-loading">
        <div className="loader"></div>
        <p>Crunching your learning numbers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="progress-error">
        <div className="error-icon">⚠️</div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="progress-container">
      <Navbar />
      
      <div className="progress-header">
        <h1>
          <FaChartPie className="header-icon" />
          Learning Journey Overview
        </h1>
        <div className="radial-progress">
          <div className="progress-circle">
            <span>{Math.round(overallProgress)}%</span>
          </div>
        </div>
      </div>

      {/* Progress Stats and Timeline */}
      <div className="progress-stats">
        <div className="stat-card total-score">
          <FaMedal className="stat-icon" />
          <h3>Total Points</h3>
          <p>{totalScore}</p>
        </div>
        <div className="stat-card completed-phases">
          <h3>Phases Completed</h3>
          <p>{progress.filter(p => p.score > 0).length}/{progress.length}</p>
        </div>
      </div>

      <div className="timeline-container">
        {progress.map((phase, index) => {
          const phaseProgress = (phase.score / (phase.totalScore || 100)) * 100;
          
          return (
            <div 
              key={index}
              className={`phase-card ${expandedPhase === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
            >
              <div className="phase-header">
                <div className="phase-progress">
                  <div className="progress-circle">
                    <span>{Math.round(phaseProgress)}%</span>
                  </div>
                </div>
                <div className="phase-info">
                  <h3>{phase.phaseId?.name || `Phase ${index + 1}`}</h3>
                  <p className="phase-status">
                    {phase.score > 0 ? 'Completed' : 'In Progress'}
                  </p>
                </div>
                <FaChevronRight className={`expand-icon ${expandedPhase === index ? 'rotated' : ''}`} />
              </div>

              {/* Phase Details */}
              {expandedPhase === index && (
                <div className="phase-details">
                  <div className="score-breakdown">
                    <div className="score-item">
                      <span>Your Score</span>
                      <div className="score-bar">
                        <div 
                          className="score-fill" 
                          style={{ width: `${phaseProgress}%` }}
                        ></div>
                      </div>
                      <span>{phase.score}/{phase.totalScore}</span>
                    </div>
                  </div>
                  <div className="phase-meta">
                    <div className="meta-item">
                      <span>Attempts</span>
                      <p>{phase.attempts || 1}</p>
                    </div>
                    <div className="meta-item">
                      <span>Best Score</span>
                      <p>{phase.score}</p>
                    </div>
                    <div className="meta-item">
                      <span>Completion Date</span>
                      <p>{new Date(phase.completedAt || Date.now()).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentProgress;
