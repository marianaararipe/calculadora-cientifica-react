import React from 'react';
import Button from './Button';

interface ScientificButtonsProps {
  onClick: (value: string) => void;
}

const scientificOps = ['sin', 'cos', 'tan', 'log', '√', '^'];

const ScientificButtons: React.FC<ScientificButtonsProps> = ({ onClick }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '180px', marginLeft: '1rem' }}>
    {scientificOps.map(op => (
      <Button key={op} value={op} onClick={onClick} />
    ))}
  </div>
);

export default ScientificButtons;
