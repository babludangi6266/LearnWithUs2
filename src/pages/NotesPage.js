import React, { useEffect, useState } from 'react';
import '../styles/notesPage.css';
import Navbar from './Navbar';
import { FaBook, FaChevronRight, FaCode, FaFileAlt, FaSearch } from 'react-icons/fa';

const NotesPage = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [titles, setTitles] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://learnwithus-f2tz.onrender.com/api/admin/notes/languages')
      .then(response => response.json())
      .then(data => setLanguages(data))
      .catch(console.error);
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setSelectedNote(null);
    
    fetch(`https://learnwithus-f2tz.onrender.com/api/admin/notes/notes/${language}`)
      .then(response => response.json())
      .then(setTitles)
      .catch(console.error);
  };

  const filteredTitles = titles.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="notes-app">
      <Navbar />
      
      <div className="notes-container">
        {/* Sidebar */}
        <div className="notes-sidebar">
          <div className="sidebar-header">
            <FaBook className="sidebar-icon" />
            <h2>Code Repository</h2>
          </div>

          <div className="language-selector">
            <label>Select Technology</label>
            <div className="custom-select">
              <select
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="">Choose a language</option>
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <FaChevronRight className="select-arrow" />
            </div>
          </div>

          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="notes-list">
            {filteredTitles.length > 0 ? (
              filteredTitles.map(note => (
                <div
                  key={note._id}
                  className={`note-item ${selectedNote?._id === note._id ? 'active' : ''}`}
                  onClick={() => setSelectedNote(note)}
                >
                  <FaFileAlt className="note-icon" />
                  <div className="note-info">
                    <h4>{note.title}</h4>
                    <span className="note-meta">{new Date(note.createdAt).toLocaleDateString()}</span>
                  </div>
                  <FaChevronRight className="chevron-icon" />
                </div>
              ))
            ) : (
              <div className="empty-state">
                <FaCode className="empty-icon" />
                <p>No notes found</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="notes-content">
          {selectedNote ? (
            <div className="note-viewer">
              <div className="note-header">
                <div className="note-breadcrumb">
                  <span>{selectedLanguage}</span>
                  <FaChevronRight />
                  <span>{selectedNote.title}</span>
                </div>
                <button className="download-btn">
                  Download PDF
                </button>
              </div>
              
              <div className="note-body">
                <h1 className="note-title">{selectedNote.title}</h1>
                <div 
                  className="note-html-content"
                  dangerouslySetInnerHTML={{ __html: selectedNote.content }}
                />
              </div>
            </div>
          ) : (
            <div className="welcome-screen">
              <div className="welcome-content">
                <FaCode className="welcome-icon" />
                <h1>Welcome to Code Docs</h1>
                <p>Select a technology from the sidebar to view available documentation</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;