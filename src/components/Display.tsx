import React from 'react';

interface DisplayProps {
  expression: string;
  result: string;
}


const Display: React.FC<DisplayProps> = ({ expression, result }) => {
  return (
    <div style={{ 
      backgroundColor: '#222', 
      color: '#0f0', 
      padding: '1rem', 
      fontSize: '1.5rem',
      minHeight: '3rem',
      fontFamily: 'monospace',
      textAlign: 'right'
    }}>
      <div>{expression || '0'}</div>
      <div style={{ fontSize: '1rem', color: '#888' }}>{result}</div>
    </div>
  );
};

export default Display;
