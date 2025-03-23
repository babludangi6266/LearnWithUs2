import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../styles/studentPhases.css';
import { FaLock, FaUnlock, FaCheckCircle, FaChevronRight } from 'react-icons/fa';

const StudentPhases = () => {
  const [phases, setPhases] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [phasesRes, progressRes] = await Promise.all([
          axios.get('https://learnwithus-f2tz.onrender.com/api/admin/phases'),
          axios.get('https://learnwithus-f2tz.onrender.com/api/student/progress', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        ]);
        
        setPhases(phasesRes.data);
        setProgress(progressRes.data.progress);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePhaseClick = async (phaseId) => {
    if (phaseId > progress + 1) return;
    
    try {
      const response = await axios.get(
        `https://learnwithus-f2tz.onrender.com/api/admin/phases/${phaseId}/questions`
      );
      setQuestions(response.data);
      setSelectedPhase(phaseId);
      setAnswers({});
      setResult(null);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers(prev => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://learnwithus-f2tz.onrender.com/api/student/submit-answers',
        { phaseId: selectedPhase, answers },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      
      const { score, totalQuestions, nextPhaseUnlocked } = response.data;
      setResult({ score, totalQuestions, nextPhaseUnlocked });
      if (nextPhaseUnlocked) setProgress(prev => prev + 1);
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  if (loading) return <div className="loading-container">Loading...</div>;
  return (
    <div className="phase-dashboard">
      <Navbar />
      
      <div className="dashboard-container">
        {/* Progress Overview Sidebar */}
        <div className="progress-sidebar">
          <div className="user-profile">
            <h2>Your Learning Path</h2>
            <div className="progress-ring">
              <div className="progress-circle" style={{ '--progress': `${(progress / phases.length) * 100}%` }}>
                <span>{Math.round((progress / phases.length) * 100)}%</span>
              </div>
            </div>
            <p>Completed {progress} of {phases.length} phases</p>
          </div>

          <div className="phase-progress">
            <h3>Phase Timeline</h3>
            <div className="timeline">
              {phases.map((phase, index) => (
                <div 
                  key={phase._id}
                  className={`timeline-item 
                    ${index < progress ? 'completed' : ''}
                    ${index === progress ? 'current' : ''}
                    ${index > progress ? 'locked' : ''}`}
                  onClick={() => handlePhaseClick(phase._id)}
                >
                  <div className="timeline-marker">
                    {index < progress ? <FaCheckCircle /> : 
                     index === progress ? <FaUnlock /> : <FaLock />}
                  </div>
                  <div className="timeline-content">
                    <h4>Phase {index + 1}</h4>
                    <p>{phase.name}</p>
                  </div>
                  <FaChevronRight className="timeline-chevron" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="phase-content">
          {selectedPhase ? (
            <div className="phase-details">
              <div className="phase-header">
                <h2>{phases.find(p => p._id === selectedPhase)?.name}</h2>
                <div className="phase-status">
                  <span className={`status-badge ${progress >= phases.findIndex(p => p._id === selectedPhase) ? 'completed' : 'current'}`}>
                    {progress >= phases.findIndex(p => p._id === selectedPhase) ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>

              <div className="quiz-container">
                <div className="question-stack">
                  {questions.map((question, index) => (
                    <div key={question._id} className="question-card">
                      <div className="question-header">
                        <span className="question-number">Q{index + 1}</span>
                        <span className="question-points">{question.points || 1} Point{question.points !== 1 ? 's' : ''}</span>
                      </div>
                      <p className="question-text">{question.question}</p>
                      <div className="option-grid">
                        {question.options.map((option, i) => (
                          <label 
                            key={i}
                            className={`option-card ${answers[question._id] === i ? 'selected' : ''}`}
                          >
                            <input
                              type="radio"
                              name={`question-${question._id}`}
                              value={i}
                              checked={answers[question._id] === i}
                              onChange={() => handleOptionChange(question._id, i)}
                            />
                            <span className="option-text">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="quiz-footer">
                  <button className="submit-btn" onClick={handleSubmit}>
                    Submit Answers
                    <span className="btn-arrow">→</span>
                  </button>
                  
                  {result && (
                    <div className="result-overlay">
                      <h3>Assessment Result</h3>
                      <div className="result-metrics">
                        <div className="metric">
                          <span className="value">{result.score}</span>
                          <span className="label">Correct</span>
                        </div>
                        <div className="metric">
                          <span className="value">{result.totalQuestions - result.score}</span>
                          <span className="label">Incorrect</span>
                        </div>
                        <div className="metric">
                          <span className="value">{((result.score / result.totalQuestions) * 100).toFixed(1)}%</span>
                          <span className="label">Accuracy</span>
                        </div>
                      </div>
                      {result.nextPhaseUnlocked && (
                        <div className="unlocked-phase">
                          <FaUnlock /> Next Phase Unlocked!
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="phase-selection-prompt">
              <h2>Select a Phase from the Timeline</h2>
              <p>Choose a phase from the left sidebar to view its content and start learning</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentPhases;