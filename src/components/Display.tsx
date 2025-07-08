import React from 'react';
import styles from './Calculator.module.css';

interface DisplayProps {
  expression: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ expression, result }) => {
  return (
    <div className={styles.display}>
      <div>{expression}</div>

      {result !== '' && (
      <div style={{ fontSize: '14px', color: '#888', marginBottom: '4px' }}>
        {result}
      </div>
      )}
    </div>
  );
};

export default Display;
