import React from 'react';
import styles from './ActionPanel.module.css';

export default function ActionPanel(props) {
  const clickHandler = (actionName) => {
    props.clickHandler(actionName);
  };

  const filterHandler = (filterType) => {
    props.filterHandler(filterType);
  };

  return (
    <div className={styles.panel}>
      <div className={styles.panelLeft}>
        <i className="fas fa-plus" onClick={clickHandler.bind(this, 'add')}></i>
        <i
          className="fas fa-search"
          onClick={clickHandler.bind(this, 'search')}
        ></i>
        <span>|</span> {props.totalItems} items left
      </div>
      <div className={styles.panelRight}>
        <span
          className={`${styles.btn} ${styles.active}`}
          onClick={filterHandler.bind(null, 'all')}
        >
          All
        </span>
        <span
          className={styles.btn}
          onClick={filterHandler.bind(null, 'active')}
        >
          Active
        </span>
        <span
          className={styles.btn}
          onClick={filterHandler.bind(null, 'completed')}
        >
          Completed
        </span>
      </div>
    </div>
  );
}
