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
      <Dispay value={result.next || result.total || '0'} />
      <ButtonPanel clickHandler={clickHandler} />
    </div>
  );
}

export default App;
