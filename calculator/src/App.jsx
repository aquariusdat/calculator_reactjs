import logo from './logo.svg';
import './App.scss';
import Button from './Components/Button'
import Display from './Components/Display'
import History from './Components/History'
import { useEffect, useState } from 'react';
function App() {
  const [prevDisplay, setPreDisplay] = useState('');
  const [display, setDisplay] = useState('0');
  const [sum, setSum] = useState(0);
  const [history, setHistory] = useState(() => {
    let history = localStorage.getItem('history');
    if (history) {
      return JSON.parse(history);
    }
    else {
      return null;
    }
  });
  const arrOperator = ['+', '-', '/', '*', '.'];
  // ******* Handling click function ********

  // useEffect(() => {
  //   console.log(display);
  // }, [display])

  useEffect(() => {
    if (history) {
      localStorage.setItem('history', JSON.stringify(history))

    }
  }, [history])



  function handleButtonClick(value) {
    if (display.length >= 0 && display.length <= 18) {
      setPreDisplay('');
      let arrDisplay = [...display];

      if (value === '%') {
        let rs = parseFloat(sum / 100);
        setSum(rs);
        setDisplay(rs.toString());
        return;
      }

      if (arrOperator.includes(arrDisplay[arrDisplay.length - 1])) {
        arrDisplay[arrDisplay.length - 1] = value;
        let rs = arrDisplay.join('');
        if (arrOperator.includes(value)) {
          setDisplay(rs);
          return;
        }
      }


      if (display === '0') {
        if (arrOperator.includes(value)) {
          setDisplay('0' + value)
        }
        else {
          setDisplay(value);
        }
      }
      else {
        let pDisplay = display + value;
        setDisplay(pDisplay);
      }
    }
    else {
      alert('Không được nhập quá 19 kí tự.');
      return;
    }



  }

  function handleDelete(value) {
    setDisplay('0');
    setPreDisplay('');
    setSum(0);
  }

  function handleDelLast(value) {
    let arr = [...display];
    if (arr.length === 1 || display === '0') {
      handleDelete(value);
    }
    else {
      arr.pop();
      let rs = arr.join('');
      setDisplay(rs);
    }
  }

  function checkContainsOperator(arr, string) {
    let myString = [...string];
    for (var i of myString) {
      console.log(i);
      if (arr.includes(i)) {
        return true;
      }
    }
    return false;
  }

  async function handleSetResult(value) {

    if (checkContainsOperator(arrOperator, display) === false) {
      console.log('false');
      return;
    }

    let flg = checkResult();

    setResult(flg);
  }

  function setResult(flg) {
    let arrDisplay = [...display];
    let rsDisplay = '';

    if (flg) {
      arrDisplay.pop();
    }

    rsDisplay = arrDisplay.join('');

    let prevResult = rsDisplay + '='
    setPreDisplay(prevResult);

    let rs = eval(rsDisplay);
    setDisplay(rs.toString());
    setSum(rs);

    // **** set history *****
    let objectHistory = {
      prevDisplay: prevResult,
      result: rs.toString()
    }

    if (history === null) {
      setHistory([objectHistory]);
    }
    else {
      let listHistory = [...history, objectHistory];
      setHistory(listHistory);
    }


  }

  function checkResult() {
    let arrDisplay = [...display];
    let lastCharacter = arrDisplay[arrDisplay.length - 1];
    if (arrOperator.includes(lastCharacter)) {
      return true;
    }
    return false;
  }


  function handleDeleteHistory() {
    setHistory(null);
  }
  // ****************************************

  return (
    <div className="App">
      <div className="container">
        <div className="history__wrapper">
          <History data={history} deleteHistory={handleDeleteHistory} />
        </div>
        <div className="calculator">
          <div className="calculator__display">
            <Display prevDisplay={prevDisplay} result={display} />
          </div>

          <div className="calculator__control">
            <div className="control__wrapper">
              <Button onClick={handleDelete} display="C" del="true" />
              <Button onClick={handleButtonClick} display="%" operator="true" />
              <Button onClick={handleDelLast} display="Del" operator="true" />
              <Button onClick={handleButtonClick} display="/" operator="true" />
              <Button onClick={handleButtonClick} display="7" />
              <Button onClick={handleButtonClick} display="8" />
              <Button onClick={handleButtonClick} display="9" />
              <Button onClick={handleButtonClick} display="*" operator="true" />
              <Button onClick={handleButtonClick} display="4" />
              <Button onClick={handleButtonClick} display="5" />
              <Button onClick={handleButtonClick} display="6" />
              <Button onClick={handleButtonClick} display="-" operator="true" />
              <Button onClick={handleButtonClick} display="1" />
              <Button onClick={handleButtonClick} display="2" />
              <Button onClick={handleButtonClick} display="3" />
              <Button onClick={handleButtonClick} display="+" operator="true" />
              <Button onClick={handleButtonClick} display="0" zero="zero" />
              <Button onClick={handleButtonClick} display="." />
              <Button onClick={handleSetResult} display="=" operator="true" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
