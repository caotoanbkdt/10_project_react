import { useState } from 'react';
import styles from './Item.module.css';

function Item({ id, item, checked }) {
  const [check, setCheck] = useState(item.checked);

  const handleOnChange = (e) => {
    setCheck(e.target.checked);
    checked(id, e.target.checked);
  };

  const styleChecked = check && styles.checked;
  return (
    <li className={styles.item}>
      <input type="checkbox" onChange={handleOnChange} checked={check} />
      <span className={`${styles.title} ${styleChecked}`}>{item.title}</span>
    </li>
  );
}

export default Item;
