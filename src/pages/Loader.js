import React from 'react';
import '../styles/Loader.css'; 


// const Loader = () => {
//     return (
//       <div className="loader-container">
//         <div className="loader">
//           <div className="dot"></div>
//           <div className="dot"></div>
//           <div className="dot"></div>
//           <div className="dot"></div>
//           <div className="dot"></div>
//         </div>
//         <p className="loading-text">Wait, your data is processing...</p>
//       </div>
//     );
//   };

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader"></div>
    <p>Wait, Data is being fateched ...</p>
  </div>
);

export default Loader;
