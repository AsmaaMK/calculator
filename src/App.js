import { React, useState } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');
  const [isFinalResult, setIsFinalResult] = useState(false);

  const handleNumberClick = (e) => {
    let btnText = e.target.innerText;
    if (isFinalResult) {
      setNum(btnText);
      setIsFinalResult(false);
    } else {
      setNum(num + btnText);
    }
  };

  const handleDecimalPointClick = () => {
    if (!num.includes('.')) {
      setNum(num + '.');
    }
  };

  const handleDelClick = () => {
    if (num.length === 1) {
      setNum('');
    } else {
      setNum(num.slice(0, -1));
    }
  };

  const handleResetClick = () => {
    setNum('');
    setResult('');
    setOperator('');
    setIsFinalResult(false);
  };

  const handleOperatorClick = (e) => {
    let operator = e.target.innerText;
    setOperator(operator);
    if (num) {
      setResult(num);
      setNum('');
    } else {
      setIsFinalResult(false);
    }
  };

  const handleEqualsClick = () => {
    let res = 0;

    switch (operator) {
      case '+':
        res = parseFloat(result) + parseFloat(num);
        break;
      case '-':
        res = parseFloat(result) - parseFloat(num);
        break;
      case '×':
        res = parseFloat(result) * parseFloat(num);
        break;
      case '/':
        res = parseFloat(result) / parseFloat(num);
        break;
      default:
        break;
    }

    setResult(res.toString());
    setOperator('');
    setNum('');
    setIsFinalResult(true);
  };

  return (
    <div className='wrapper'>
      <div className='calc'>
        <input
          className='screen'
          type='text'
          value={isFinalResult ? result : num}
          readOnly
        />
        <div className='buttons'>
          <div className='row'>
            <button className='button' onClick={handleNumberClick}>
              7
            </button>
            <button className='button' onClick={handleNumberClick}>
              8
            </button>
            <button className='button' onClick={handleNumberClick}>
              9
            </button>
            <button className='button blue' onClick={handleDelClick}>
              DEL
            </button>
          </div>
          <div className='row'>
            <button className='button' onClick={handleNumberClick}>
              4
            </button>
            <button className='button' onClick={handleNumberClick}>
              5
            </button>
            <button className='button' onClick={handleNumberClick}>
              6
            </button>
            <button className='button' onClick={handleOperatorClick}>
              +
            </button>
          </div>
          <div className='row'>
            <button className='button' onClick={handleNumberClick}>
              1
            </button>
            <button className='button' onClick={handleNumberClick}>
              2
            </button>
            <button className='button' onClick={handleNumberClick}>
              3
            </button>
            <button className='button' onClick={handleOperatorClick}>
              -
            </button>
          </div>
          <div className='row'>
            <button className='button' onClick={handleDecimalPointClick}>
              .
            </button>
            <button className='button' onClick={handleNumberClick}>
              0
            </button>
            <button className='button' onClick={handleOperatorClick}>
              /
            </button>
            <button className='button' onClick={handleOperatorClick}>
              ×
            </button>
          </div>
          <div className='row'>
            <button className='button blue' onClick={handleResetClick}>
              RESET
            </button>
            <button className='button orange' onClick={handleEqualsClick}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
