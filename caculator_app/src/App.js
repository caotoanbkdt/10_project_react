import React, { useState } from 'react';

import Dispay from './components/Display';
import ButtonPanel from './components/ButtonPanel';

import Caculate from './logic/Caculate';
import './App.css';

function App() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operator: null,
  });

  const clickHandler = (buttonName) => {
    setResult(Caculate(result, buttonName));
  };
  return (
    <div className="App">
<<<<<<< HEAD
      <div className="result">0</div>
      <div className="controls">
        <div className="row">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className="btn-control">÷</button>
        </div>
        <div className="row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="btn-control">x</button>
        </div>
        <div className="row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="btn-control">-</button>
        </div>
        <div className="row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="btn-control">+</button>
        </div>
        <div className="row">
          <button className="btn-extend">0</button>
          <button>.</button>
          <button className="btn-control">=</button>
        </div>
      </div>
=======
      <Dispay value={result.next || result.total || '0'} />
      <ButtonPanel clickHandler={clickHandler} />
>>>>>>> calculator_app
    </div>
  );
}

export default App;
