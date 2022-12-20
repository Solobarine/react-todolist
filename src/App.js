import React from 'react';
import Nav from './components/Nav';
import CreateTodos from './components/CreateTodos';
import ShowTodos from './components/ShowTodos';

const App = () => {
  let todoList = null
  const list = JSON.parse(localStorage.getItem('TodoList'));
  console.log(list)
  if (list === null) {
    todoList = [];
  } else {
    todoList = list
  }
  return (
    <div className='app'>
      <Nav />
      <CreateTodos list={todoList} />
      <ShowTodos list={todoList} />
    </div>
  );
}

export default App
