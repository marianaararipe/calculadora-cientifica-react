import React from 'react';

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => (
  <button
    onClick={() => onClick(value)}
    style={{
      padding: '1rem',
      margin: '0.25rem',
      minWidth: '3rem',
      cursor: 'pointer',
      fontWeight: 'bold',
    }}
  >
    {value}
  </button>
);

export default Button;
