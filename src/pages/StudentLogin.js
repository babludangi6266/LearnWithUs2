import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import '../styles/studentLogin.css';

const StudentLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch('https://learnwithus-f2tz.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/student-home');
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
    <div className="login-main-container">
      {loading && <Loader />}
      <div className="login-page">
        <div className="split-container">
          <div className="login-image-side">
            <div className="image-content">
              <h1>Learn With Us</h1>
              <p>Unlock your potential with interactive learning experiences</p>
            </div>
            <div className="image-overlay"></div>
          </div>
          
          <div className="form-side">
            <div className="login-container">
              <h2>Welcome Back! 👋</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={loginData.email} 
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
                    value={loginData.password} 
                    onChange={handleChange} 
                    placeholder="••••••••"
                    required 
                  />
                </div>
                <button type="submit" className="btn" disabled={loading}>
                  {loading ? 'Processing...' : 'Sign In'}
                </button>
              </form>
              {error && <p className="error-message">⚠️ {error}</p>}
              <p className="register-link">
                New here? <Link to="/student-register">Create account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;