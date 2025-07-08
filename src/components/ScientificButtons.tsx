import React from 'react';
import styles from './Calculator.module.css'; // ← importante importar o CSS

interface ScientificButtonsProps {
  onButtonClick: (value: string) => void;
}

const scientificButtons = [
  { label: 'x²', value: '^2' },
  { label: '√x', value: '√' },
  { label: 'xʸ', value: '^' },
  { label: '10ˣ', value: '10^' },
  { label: 'log', value: 'log' },
  { label: 'n!', value: '!' },
  { label: 'sin', value: 'sin' },
  { label: 'cos', value: 'cos' },
  { label: 'tan', value: 'tan' },
  { label: 'sin⁻¹', value: 'asin' },
  { label: 'cos⁻¹', value: 'acos' },
  { label: 'tan⁻¹', value: 'atan' },
  { label: 'π', value: 'pi' },
  { label: '(', value: '(' },
  { label: ')', value: ')' },
];

const ScientificButtons: React.FC<ScientificButtonsProps> = ({ onButtonClick }) => {
  return (
    <div className={styles.sciButtons}>
      {scientificButtons.map((btn) => (
        <button
          key={btn.label}
          className={`${styles.button} ${styles.operator}`}

          onClick={() => onButtonClick(btn.value)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default ScientificButtons;
