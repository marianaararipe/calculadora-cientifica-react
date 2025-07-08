import React from 'react';
import Button from './Button';

interface BasicButtonsProps {
  onClick: (value: string) => void;
  onClear: () => void;
  onCalculate: () => void;
}

const BasicButtons: React.FC<BasicButtonsProps> = ({ onClick, onClear, onCalculate }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '240px' }}>
    {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','='].map((btn) => 
      btn === '=' ? (
        <button key={btn} onClick={onCalculate} style={{ padding: '1rem', margin: '0.25rem', minWidth: '3rem' }}>
          {btn}
        </button>
      ) : (
        <Button key={btn} value={btn} onClick={onClick} />
      )
    )}
    <button onClick={onClear} style={{ padding: '1rem', margin: '0.25rem', minWidth: '3rem' }}>C</button>
  </div>
);

export default BasicButtons;
