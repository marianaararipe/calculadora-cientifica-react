import React, { useState } from 'react';
import Display from './Display';
import BasicButtons from './BasicButtons';
import ScientificButtons from './ScientificButtons';

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [showScientific, setShowScientific] = useState(false);

  const addToExpression = (value: string) => {
    setExpression(prev => prev + value);
  };

  const clear = () => {
    setExpression('');
    setResult('');
  };

  const calculate = () => {
    try {
      // Para cálculos básicos ok usar eval, depois substitui para lidar com científico
      const res = eval(expression);
      setResult(String(res));
    } catch {
      setResult('Erro');
    }
  };

  const toggleScientific = () => {
    setShowScientific(prev => !prev);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Display expression={expression} result={result} />
      <div style={{ display: 'flex' }}>
        <BasicButtons onClick={addToExpression} onClear={clear} onCalculate={calculate} />
        {showScientific && <ScientificButtons onClick={addToExpression} />}
      </div>
      <button onClick={toggleScientific} style={{ marginTop: '1rem' }}>
        {showScientific ? 'Ocultar Científica' : 'Mostrar Científica'}
      </button>
    </div>
  );
};

export default Calculator;
