import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import TodoApp from './components/Form'

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

  const changeDone = (index) => {
    setTasks( tasks.map( (item, i) => {
      return (i === index? { ...item, done: !item.done } : item)
    }))}

  return (
    <>
      <h1>Task</h1>
      <TodoApp addTask={addTask}/>
      {
        tasks.map( (item, index) => (
          <Card key={index} titre={item.titre} done={item.done} onClick={() => changeDone(index)}/>
        ))
      }
    </>
  )
}

export default App
