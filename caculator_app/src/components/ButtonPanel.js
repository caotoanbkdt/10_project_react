import Button from './Button';
import './ButtonPanel.css';

function ButtonPanel(props) {
  const clickHanlder = (buttonName) => {
    props.clickHandler(buttonName);
  };
  return (
    <div className="controls">
      <div className="row">
        <Button clickHanlder={clickHanlder}>AC</Button>
        <Button clickHanlder={clickHanlder}>+/-</Button>
        <Button clickHanlder={clickHanlder}>%</Button>
        <Button clickHanlder={clickHanlder} className="btn-control">
          ÷
        </Button>
      </div>
      <div className="row">
        <Button clickHanlder={clickHanlder}>7</Button>
        <Button clickHanlder={clickHanlder}>8</Button>
        <Button clickHanlder={clickHanlder}>9</Button>
        <Button clickHanlder={clickHanlder} className="btn-control">
          x
        </Button>
      </div>
      <div className="row">
        <Button clickHanlder={clickHanlder}>4</Button>
        <Button clickHanlder={clickHanlder}>5</Button>
        <Button clickHanlder={clickHanlder}>6</Button>
        <Button clickHanlder={clickHanlder} className="btn-control">
          -
        </Button>
      </div>
      <div className="row">
        <Button clickHanlder={clickHanlder}>1</Button>
        <Button clickHanlder={clickHanlder}>2</Button>
        <Button clickHanlder={clickHanlder}>3</Button>
        <Button clickHanlder={clickHanlder} className="btn-control">
          +
        </Button>
      </div>
      <div className="row">
        <Button clickHanlder={clickHanlder} className="btn-extend">
          0
        </Button>
        <Button clickHanlder={clickHanlder}>.</Button>
        <Button clickHanlder={clickHanlder} className="btn-control">
          =
        </Button>
      </div>
    </div>
  );
}

export default ButtonPanel;
