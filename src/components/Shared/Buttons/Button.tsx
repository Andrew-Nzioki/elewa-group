import React, { ButtonHTMLAttributes } from 'react';
//Reusable button to be reused accross the project that can be customized using tailwind classes
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`rounded px-4 py-2 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
