import React, {useState} from 'react';
import Task from './task';
import Form from './Form';

export default function TaskList() {


  // State Array which hold all TODOS
  const [todos, setTodos] = useState([]);


  // Add todo to list
  const addTask = task => {
    if (!task.text) {
      return
    }
    const newTodos = [task, ...todos];
    setTodos(newTodos);
  }

  // Remove todo from list
  const removeTask = id => {
    let updatedTasks = [...todos].filter(task => task.id !== id)
    setTodos(updatedTasks)
  }

  // Task is completed
  const completeTask = id => {
    let updatedTasks = todos.map(todo => {
      if (Task.id === id) {
        Task.isComplete = true;
      }
      return Task;
    })
    setTodos(updatedTasks)

  }


  return <div>
    <Form addTask={addTask}></Form>
    <Task todos={todos} completeTask={completeTask} removeTask={removeTask} ></Task>
  </div>;
}