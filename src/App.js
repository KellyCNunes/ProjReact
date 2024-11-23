// App.js
import React, { useState } from 'react';
import Gallery from './projeto3/Gallery';
import TodoList from './projeto3/TodoList';
import Button1 from './projeto3/Button1';
import Button2 from './projeto3/Button2';
import './App.css';

function App() {
  const initialTasks = [
    { id: 1, text: "Estudar React", completed: false },
    { id: 2, text: "Revisar conceitos de props e state", completed: true },
    { id: 3, text: "Implementar o projeto", completed: false },
  ];

  const [showTasks, setShowTasks] = useState(true);

  const toggleTaskVisibility = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="App">
      <h1>Galeria e Lista de Tarefas</h1>
      <Gallery />
      
      <Button1 
        onClick={toggleTaskVisibility} 
        label={showTasks ? "Esconder Tarefas" : "Mostrar Tarefas"} 
      />
      
      {showTasks && <TodoList todos={initialTasks} />}
      
      <Button2 
        onClick={() => alert("Botão 2 clicado!")} 
        label="Ação Extra" 
      />
    </div>
  );
}

export default App;
