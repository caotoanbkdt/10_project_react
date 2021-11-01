import { Fragment, useState, useEffect } from 'react';

import styles from './App.module.css';
import Input from './components/Input';
import { v4 as uuidv4 } from 'uuid';

import ListItem from './components/ListItem';
import ActionPanel from './components/ActionPanel';

function App() {
  const todosList = [
    { id: uuidv4(), title: 'Learn Javascript', checked: false },
    { id: uuidv4(), title: 'Learn React', checked: false },
    { id: uuidv4(), title: 'Build React App', checked: false },
  ];

  const [showInputAdd, setShowInputAdd] = useState(true);
  const [showInputSearch, setShowInputSearch] = useState(false);
  const [typeFilter, setTypeFilter] = useState('all');
  const [todos, setTodos] = useState(todosList);
  const [filteredList, setFilteredList] = useState(todos);

  useEffect(() => {
    filterFn();
  }, [typeFilter, todos]);

  const changeType = (type) => {
    setTypeFilter(type);
  };

  const filterFn = () => {
    switch (typeFilter) {
      case 'completed':
        setFilteredList(todos.filter((item) => item.checked === true));
        break;
      case 'active':
        setFilteredList(todos.filter((item) => item.checked === false));
        break;
      default:
        setFilteredList(todos);
    }
  };

  const clickHandler = (actionName) => {
    if (actionName === 'add') {
      setShowInputSearch(false);
      setShowInputAdd(!showInputAdd);
    } else {
      setShowInputAdd(false);
      setShowInputSearch(!showInputSearch);
    }
  };

  const inputHandler = (inputValue) => {
    if (showInputAdd) {
      const newItem = { id: uuidv4(), title: inputValue, checked: false };
      setTodos((prevTodos) => prevTodos.concat(newItem));
    } else {
      const newList = todos.filter(
        (todo) => todo.title.indexOf(inputValue) !== -1
      );
      setFilteredList(newList);
    }
  };

  const checkHanlder = (id, check) => {
    console.log(id, check);
    const newList = todos.map((item) => {
      if (item.id === id) {
        return { ...item, checked: check };
      }
      return item;
    });
    setTodos(newList);
  };

  return (
    <Fragment>
      <div className={styles.App}>
        <h1>things to do</h1>
        {showInputAdd && (
          <Input placeholder="Add New" inputValue={inputHandler} />
        )}
        {showInputSearch && (
          <Input placeholder="Search" inputValue={inputHandler} />
        )}

        <ListItem listItems={filteredList} onCheckHandler={checkHanlder} />
        <ActionPanel
          clickHandler={clickHandler}
          filterHandler={changeType}
          totalItems={filteredList.length}
        />
      </div>
      <p className={styles.textCenter}>
        Press '/' to search and `N` to create a new item
      </p>
    </Fragment>
  );
}
export default App;
