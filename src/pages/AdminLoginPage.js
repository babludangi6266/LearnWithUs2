
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLoginPage.css';

const AdminLoginPage = () => {
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
      const response = await fetch('https://learnwithus-f2tz.onrender.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        localStorage.setItem('token', token);
        navigate('/admin-dashboard');
      } else {
        setError(data.msg);
      }
      
    } catch (err) {
      setError('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={loginData.email} 
          onChange={handleChange} 
          placeholder="Enter your email"
          required 
        />

        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={loginData.password} 
          onChange={handleChange} 
          placeholder="Enter your password"
          required 
        />
       
        <button type="submit" className="admin-login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AdminLoginPage;
