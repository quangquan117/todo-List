import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const [tasks, setTasks] = useState([
    {titre: 'Task 1'},
    {titre: 'Task 2'},
    {titre: 'Task 3'},
    {titre: 'Task 4'},
  ])

  return (
    <>
      <h1>Task</h1>
      {
        tasks.map( (item, index) => (
          <Card key={index} titre={item.titre} />
        ))
      }
    </>
  )
}

export default App
