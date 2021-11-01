import { useState } from 'react';
import './Input.module.css';

function Input(props) {
  const [input, setInput] = useState('');

  const onChangeHanlder = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== '') {
      props.inputValue(input);
      setInput('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        value={input}
        onChange={onChangeHanlder}
        placeholder={props.placeholder}
      />
    </form>
  );
}

export default Input;
