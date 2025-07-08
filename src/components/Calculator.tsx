import React, { useState, useEffect } from 'react';
import styles from './Calculator.module.css';
import Display from './Display';
import BasicButtons from './BasicButtons';
import ScientificButtons from './ScientificButtons';

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState('0');
  const [result, setResult] = useState('');
  const [justCalculated, setJustCalculated] = useState(false);
  const [sciMode, setSciMode] = useState(false);

  const operators = ['+', '−', '×', '÷'];

  useEffect(() => {
    try {
      const hasValidOperation = /[0-9]+[+\-×÷][0-9]+/.test(expression);
      const endsWithOperator = /[+\-×÷.]$/.test(expression);
      if (!hasValidOperation || endsWithOperator || justCalculated) {
        setResult('');
        return;
      }
      const formatted = expression
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/−/g, '-')
        .replace(/%/g, '/100');
      const evalResult = eval(formatted);
      setResult(String(evalResult));
    } catch {
      setResult('');
    }
  }, [expression, justCalculated]);

  const calculateResult = (expr: string) => {
    try {
      const formatted = expr
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/−/g, '-')
        .replace(/%/g, '/100');
      return String(eval(formatted));
    } catch {
      return 'Erro';
    }
  };

  const onButtonClick = (value: string) => {
    if (value === 'Sci') {
      setSciMode((prev) => !prev);
      return;
    }
    if (value === 'AC') {
      setExpression('0');
      setJustCalculated(false);
      return;
    }
    if (value === '=') {
      const res = calculateResult(expression);
      if (res === 'Erro' || isNaN(Number(res))) {
        setExpression('Erro');
        setResult('');
        setJustCalculated(true);
        return;
      }
      setExpression(res);
      setResult('');
      setJustCalculated(true);
      return;
    }
    if (value === '⌫') {
      setExpression((prev) => {
        const updated = prev.length > 1 ? prev.slice(0, -1) : '0';
        return updated;
      });
      return;
    }
    if (justCalculated && /\d/.test(value)) {
      setExpression(value);
      setJustCalculated(false);
      return;
    }
    if (operators.includes(value)) {
      if (operators.includes(expression.slice(-1))) {
        setExpression(expression.slice(0, -1) + value);
      } else {
        setExpression(expression + value);
      }
      setJustCalculated(false);
      return;
    }
    if (expression === '0') {
      if (/\d/.test(value)) {
        setExpression(value);
      } else {
        setExpression(expression + value);
      }
    } else {
      setExpression(expression + value);
    }
    setJustCalculated(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {sciMode && (
          <div className={styles.sciButtons}>
            <ScientificButtons onButtonClick={onButtonClick} />
          </div>
        )}
        <div
          className={`${styles.calculator} ${
            sciMode ? styles.expanded : ''
          }`}
        >
          <Display expression={expression} result={result} />
          <div className={styles.buttons}>
            <BasicButtons onButtonClick={onButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );

  
};

export default Calculator;
