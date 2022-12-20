import React, {useState} from 'react';

const CreateTodos = (todoList) => {
  const [task, setTask] = useState('');
  console.log(todoList.list)
  const storeTask = () => {
    const todo = {
      id: todoList.length,
      isCompleted: false,
      task: task
    }
    todoList.list.push(todo);
    localStorage.setItem('TodoList', JSON.stringify(todoList.list))
    setTask('')
  }
  return (
    <section className="addTodo">
      <input type="text" className="todo" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button className="submit" onClick={storeTask}>Submit</button>
      <p>{task}</p>
    </section>
  )
}

export default CreateTodos
