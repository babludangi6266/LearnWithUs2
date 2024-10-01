
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentHomePage from './pages/StudentHomePage';
import AdminHomePage from './pages/AdminHomePage';
import Stulogin from './pages/StudentLogin';
import Stureg from './pages/StudentRegister';

import Adcntmt from './pages/ContentManagement';
import Feedback from './pages/Feedback';
import StudentProgressPage from './pages/StudentProgressPage';
import AdminLoginPage from './pages/AdminLoginPage';
import ManagePhases from './pages/ManagePhases';
import ManageQuestions from './pages/ManageQuestions';
import ViewStudents from './pages/ViewStudents';
import StudentPhases from './pages/StudentPhases'; 
import GetStartPage from './pages/GetStartPage'; 
import Loader from './pages/Loader'; 

import QuestionAnswers from './pages/StudentQueAns';
import NotesPage from './pages/NotesPage';
import AddNotes from './pages/AddNotes';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Loader" element={<Loader />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/student-home" element={<StudentHomePage />} />
        <Route path="/admin-dashboard" element={<AdminHomePage />} />
        <Route path="/student-login" element={<Stulogin />} />
        <Route path="/student-register" element={<Stureg />} />
        <Route path="/ManagePhases" element={<ManagePhases />} />
        <Route path="/Adcntmt" element={<Adcntmt />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/StudentProgressPage" element={<StudentProgressPage />} />
        <Route path="/ManageQuestions" element={<ManageQuestions />} />
        <Route path="/ViewStudents" element={<ViewStudents />} />
        <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
      
        <Route path="/QuestionAnswers" element={<QuestionAnswers />} />
        <Route path="/AddNotes" element={<AddNotes />} />
        <Route path="/NotesPage" element={<NotesPage />} />
        <Route path="/StudentPhases" element={<StudentPhases />} /> 
        <Route path="/GetStartPage" element={<GetStartPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
