
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import AdminNavbar from '../pages/AdminNavbar';
import '../styles/adminHomePage.css';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

const AddNotes = () => {
  const [language, setLanguage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post('https://learnwithus-f2tz.onrender.com/api/admin/notes/notes', {
      await axios.post('https://learnwithus-f2tz.onrender.com/api/admin/notes/notes', {
        language,
        title,
        content
      });
      alert('Note added successfully!');
      setLanguage('');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  return (
    <div className="add-notes-container">
      <div>
        <AdminNavbar/>
      </div>
      <h2>Add New Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <input
            type="text"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <ReactQuill 
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            placeholder="Write your content here..."
          />
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNotes;
