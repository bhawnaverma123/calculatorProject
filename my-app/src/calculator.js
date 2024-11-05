// src/Calculator.js
import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-heading">Calculator</h1>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
        {['0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === '=' ? handleCalculate() : handleButtonClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button className="clear-button" onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
