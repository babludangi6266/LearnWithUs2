import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import '../styles/studentRegister.css';

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://learnwithus-f2tz.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/student-login');
      } else {
        setError(data.msg);
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-main-container">
      {loading && <Loader />}
      <div className="register-page">
        
        <div className="split-container">
          <div className="register-image-side">
            <div className="image-content">
              <h1>Join Our Community</h1>
              <p>Start your learning journey with expert mentors and peers</p>
            </div>
            <div className="image-overlay"></div>
          </div>
          
          <div className="form-side">
            <div className="register-container">
              <h2>Create Account 🚀</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name:</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your full name"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Email:</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="••••••••"
                    required 
                  />
                </div>

                <button type="submit" className="btn" disabled={loading}>
                  {loading ? 'Creating Account...' : 'Sign Up'}
                </button>
              </form>
              {error && <p className="error-message">⚠️ {error}</p>}
              <p className="login-link">
                Already have an account? <Link to="/student-login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;