
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
  const [studentId, setStudentId] = useState(null);

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
      // const response = await fetch('https://learnwithus-f2tz.onrender.com/api/auth/login', {
      const response = await fetch('https://learnwithus-f2tz.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Save the JWT token to local storage
        const token = data.token;
        localStorage.setItem('token', token);  // Save the whole token here
  
        // Redirect to student home
        navigate('/student-home');
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
    <div className="login-main-container">
      <div className="login-page">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        <div className="rotating-background">
          <div>LearnWith</div>
          <div>US</div>
        </div>
        <div className="login-container">
          <h2>Student Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={loginData.email} 
              onChange={handleChange} 
              required 
            />
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={loginData.password} 
              onChange={handleChange} 
              required 
            />
            <button type="submit" className="btn" disabled={loading}>
              {loading ?  <Loader /> : 'Login'}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
          <p className="register-link">
            Not registered? <Link to="/student-register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Loader from './Loader'; // Import the Loader component
// import '../styles/studentLogin.css';

// const StudentLogin = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setLoginData({
//       ...loginData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('https://learnwithus-f2tz.onrender.com/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const token = data.token;
//         localStorage.setItem('token', token);

//         // Redirect to student home
//         navigate('/student-home');
//       } else {
//         setError(data.msg);
//       }
//     } catch (err) {
//       setError('Server error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-main-container">
//       <div className="login-page">
//         <div className="floating-elements">
//           <div className="floating-element"></div>
//           <div className="floating-element"></div>
//         </div>
//         <div className="rotating-background">
//           <div>LearnWith</div>
//           <div>US</div>
//         </div>
//         <div className="login-container">
//           <h2>Student Login</h2>
//           <form onSubmit={handleSubmit}>
//             <label>Email:</label>
//             <input 
//               type="email" 
//               name="email" 
//               value={loginData.email} 
//               onChange={handleChange} 
//               required 
//             />
//             <label>Password:</label>
//             <input 
//               type="password" 
//               name="password" 
//               value={loginData.password} 
//               onChange={handleChange} 
//               required 
//             />
//             <button type="submit" className="btn" disabled={loading}>
//               {loading ? <Loader /> : 'Login'}
//             </button>
//           </form>
//           {error && <p className="error">{error}</p>}
//           <p className="register-link">
//             Not registered? <Link to="/student-register">Register here</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentLogin;
