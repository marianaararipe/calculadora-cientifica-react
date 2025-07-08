import React from 'react';
import styles from './Calculator.module.css';

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  variant?: 'equal' | 'zero' | 'number' | 'operator' | 'control';
  extraClassName?: string;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, variant, extraClassName }) => {
  const classList = [styles.button];
  if (variant) classList.push(...variant.split(' ').map(v => styles[v]));

  if (extraClassName) classList.push(extraClassName);

  return (
    <button className={classList.join(' ')} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
