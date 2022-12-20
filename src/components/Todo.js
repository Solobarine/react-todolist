import React, {useState} from 'react';
const Todo = (todoList) => {
  const list = todoList.todoList
  const editTodo = (e) => {
    e.target.classList.add('hide');
  }
  const [edit, setEdit] = useState('')
  const changeTask = () => {
    
  }
  return (
    <div>
      {
        list.map((item) => (
          <div className="todo-div">
            <p className="task" onDoubleClick={editTodo}>{item.task}</p>
            <input type="text" className="inp" onChange={(e) => setEdit(e.target.value)}/>
            <p>{edit}</p>
          </div>
        ))}
    </div>
  );
}

export default Todo
