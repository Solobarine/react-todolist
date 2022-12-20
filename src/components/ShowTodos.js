import React from 'react';
import Todo from './Todo';

const ShowTodos = (todoList) => {
  return (
    <>
      <h1 className="head">Daily Tasks</h1>
      <div className="todo-area">
        <Todo todoList={todoList.list} />
      </div>
    </>
  )
}

export default ShowTodos
