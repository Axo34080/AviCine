import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const buttonClasses = `
    btn 
    btn--${variant} 
    btn--${size} 
    ${disabled ? 'btn--disabled' : ''} 
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
