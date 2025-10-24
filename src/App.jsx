import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import TodoApp from './components/Form';

function App() {
  const [tasks, setTasks] = useState([
    { titre: 'Task 1', done: false },
    { titre: 'Task 2', done: false },
    { titre: 'Task 3', done: false },
    { titre: 'Task 4', done: false },
  ]);

  function addTask(newTask) {
    if (newTask.titre === "") return;
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const changeDone = (index) => {
    setTasks(tasks.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <>
      <h1>Task</h1>
      <TodoApp addTask={addTask} />
      {tasks.map((item, index) => (
        <Card
          key={index}
          titre={item.titre}
          done={item.done}
          onClick={() => changeDone(index)}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </>
  );
}

export default App;
