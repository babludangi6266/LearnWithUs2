import React from 'react';
import '../styles/Loader.css'; 
const Loader = () => (
  <div className="loader-overlay">
    <div className="loader"></div>
    <p>Wait, Data is being fateched ...</p>
  </div>
);

export default Loader;
