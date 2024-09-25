
import React, { useEffect, useState } from 'react';
import '../styles/notesPage.css';

const NotesPage = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [titles, setTitles] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  // Fetch the distinct languages
  useEffect(() => {
    fetch('https://learnwithus-f2tz.onrender.com/api/admin/notes/languages')
      .then(response => response.json())
      .then(data => setLanguages(data))
      .catch(error => console.error('Error fetching languages:', error));
  }, []);

  // Fetch titles based on selected language
  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);
    setSelectedNote(null); // Clear selected note on language change

    fetch(`https://learnwithus-f2tz.onrender.com/api/admin/notes/notes/${language}`)
      .then(response => response.json())
      .then(data => setTitles(data))
      .catch(error => console.error('Error fetching titles:', error));
  };

  // Fetch note content by title
  const handleTitleClick = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="notes-page-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Select Language</h2>
        <select 
          className="language-select" 
          value={selectedLanguage} 
          onChange={handleLanguageChange}
        >
          <option value="">Select Language</option>
          {languages.map(language => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        <h3 className="sidebar-title">Titles:</h3>
        <ul className="title-list">
          {titles.length > 0 ? (
            titles.map((note) => (
              <li 
                key={note._id} 
                className={`title-item ${selectedNote && selectedNote._id === note._id ? 'active' : ''}`} 
                onClick={() => handleTitleClick(note)}
              >
                {note.title}
              </li>
            ))
          ) : (
            <p className="no-notes-message">No titles available for this language.</p>
          )}
        </ul>
      </div>

      <div className="content-container">
        {selectedNote ? (
          <div className="note-card">
            <h3 className="note-title">{selectedNote.title}</h3>
            <div 
              className="note-content" 
              dangerouslySetInnerHTML={{ __html: selectedNote.content }} 
            />
          </div>
        ) : (
          <p className="no-notes-message">Select a title to view the content.</p>
        )}
      </div>
    </div>
  );
};

export default NotesPage;
