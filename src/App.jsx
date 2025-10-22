import { useState } from 'react'
import './App.css'
import Form from "./components/Form"

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    if (newTask === "") return;
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <h2>Ma To-Do List</h2>
      <Form onAddTask={addTask} />
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp
