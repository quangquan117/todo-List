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

  return (
    <>
      <h1>Task</h1>
      {
        tasks.map( (item, index) => (
          <Card key={index} titre={item.titre} done={item.done}/>
        ))
      }
    </>
  )
}

export default App
