import React from 'react';
import './Loading.css';

const Loading = ({ 
  size = 'medium', 
  message = 'Chargement...', 
  type = 'spinner',
  className = '' 
}) => {
  return (
    <div className={`loading loading--${size} ${className}`}>
      {type === 'spinner' && (
        <div className="loading__spinner">
          <div className="loading__spinner-circle"></div>
        </div>
      )}
      {type === 'dots' && (
        <div className="loading__dots">
          <div className="loading__dot"></div>
          <div className="loading__dot"></div>
          <div className="loading__dot"></div>
        </div>
      )}
      {type === 'pulse' && (
        <div className="loading__pulse">
          <div className="loading__pulse-circle"></div>
        </div>
      )}
      {message && (
        <p className="loading__message">{message}</p>
      )}
    </div>
  );
};

export default Loading;
