import React from 'react';
import Button from './Button';
import './ErrorMessage.css';

const ErrorMessage = ({ 
  error, 
  onRetry, 
  title = 'Une erreur est survenue',
  className = '' 
}) => {
  return (
    <div className={`error-message ${className}`}>
      <div className="error-message__icon">
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      </div>
      
      <h3 className="error-message__title">{title}</h3>
      
      {error && (
        <p className="error-message__description">
          {typeof error === 'string' ? error : error.message || 'Erreur inconnue'}
        </p>
      )}
      
      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="secondary"
          size="small"
          className="error-message__retry"
        >
          Réessayer
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;
