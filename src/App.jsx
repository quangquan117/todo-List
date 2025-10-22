import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

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
