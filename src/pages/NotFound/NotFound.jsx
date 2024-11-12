import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

export const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-heading">404</h1>
      <p className="notfound-message">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="notfound-link">Go Back to Home</Link>
    </div>
  );
};
