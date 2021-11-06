import './Button.css';

function Button(props) {
  const className = props.className ? props.className : '';
  const clickHanlder = () => {
    props.clickHanlder(props.children);
  };
  return (
    <button className={className} onClick={clickHanlder}>
      {props.children}
    </button>
  );
}

export default Button;
