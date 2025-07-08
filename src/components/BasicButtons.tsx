import React from 'react';
import Button from './Button';

interface BasicButtonsProps {
  onButtonClick: (value: string) => void;
}

const BasicButtons: React.FC<BasicButtonsProps> = ({ onButtonClick }) => {
  return (
    <>
      <Button value="Sci" onClick={onButtonClick} variant="control" />
<Button value="AC" onClick={onButtonClick} variant="control" />
<Button value="⌫" onClick={onButtonClick} variant="control" />
<Button value="÷" onClick={onButtonClick} variant="operator" />

<Button value="7" onClick={onButtonClick} variant="number" />
<Button value="8" onClick={onButtonClick} variant="number" />
<Button value="9" onClick={onButtonClick} variant="number" />
<Button value="×" onClick={onButtonClick} variant="operator" />

<Button value="4" onClick={onButtonClick} variant="number" />
<Button value="5" onClick={onButtonClick} variant="number" />
<Button value="6" onClick={onButtonClick} variant="number" />
<Button value="-" onClick={onButtonClick} variant="operator" />

<Button value="1" onClick={onButtonClick} variant="number" />
<Button value="2" onClick={onButtonClick} variant="number" />
<Button value="3" onClick={onButtonClick} variant="number" />
<Button value="+" onClick={onButtonClick} variant="operator" />

<Button value="0" onClick={onButtonClick} variant="zero number" />
<Button value="." onClick={onButtonClick} variant="number" />
<Button value="=" onClick={onButtonClick} variant="equal" />
    </>
  );
};

export default BasicButtons;
