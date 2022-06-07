import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'

export default function task({ todos, completeTask, removeTask }) {
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'complete task-success' : 'task-success'} key={index}>
      <div className="task-text">{todo.text}</div>
      <div className="symbol" key={todo.id}>
        <TiTick className={todo.isComplete ? 'hide' : 'tick'} onClick={() => { completeTask(todo.id) }}></TiTick>
        <RiCloseCircleLine className='cross' onClick={() => { removeTask(todo.id) }}></RiCloseCircleLine>
      </div>
    </div>
  ))
}
