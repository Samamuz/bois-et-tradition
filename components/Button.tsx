import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 transform";
  
  // Conditionally apply hover effects and cursor styles
  const interactiveClasses = disabled 
    ? "opacity-60 cursor-not-allowed" 
    : "hover:-translate-y-0.5";

  const variants = {
    primary: "bg-wood-800 text-white shadow-lg " + (disabled ? "" : "hover:bg-wood-700 hover:shadow-xl"),
    secondary: "bg-white text-wood-900 shadow-md " + (disabled ? "" : "hover:bg-wood-50 hover:shadow-lg"),
    outline: "border-2 border-wood-800 text-wood-800 " + (disabled ? "" : "hover:bg-wood-800 hover:text-white")
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${interactiveClasses} ${className}`;

  if (to && !disabled) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;