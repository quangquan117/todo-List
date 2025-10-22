import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Form from "./components/Form"

function App() {

  const [tasks, setTasks] = useState([
    {titre: 'Task 1',
      done: false,
    },
    {titre: 'Task 2',
      done: false,
    },
    {titre: 'Task 3',
      done: false,
    },
    {titre: 'Task 4',
      done: false,
    },
  ])
  
  function addTask(newTask) {
    if (newTask === "") return;
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Ma To-Do List</h2>
      <Form onAddTask={addTask} />
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t.titre} {/* ✅ on affiche la propriété */}
            <button onClick={() => deleteTask(i)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
