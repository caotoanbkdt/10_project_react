import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
