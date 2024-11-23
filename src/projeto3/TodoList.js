// TodoList.js
import React, { useState } from 'react';
import './TodoList.css';

function TodoList({ todos }) {
  const [tasks, setTasks] = useState(todos);

  // Função para alternar o status de conclusão de uma tarefa
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-list">
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map(task => (
          <li 
            key={task.id} 
            className={task.completed ? 'completed' : ''} 
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
