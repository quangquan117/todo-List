import { use, useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import TodoApp from './components/Form';

const savedTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const loadedTasks = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

function App() {
  const [tasks, setTasks] = useState(loadedTasks());

  useEffect(() => {
    savedTasks(tasks);
  }, [tasks]);

  function countNoDoneTask() {
    return tasks.filter(task => !task.done).length;
  }

  function addTask(newTask) {
    if (newTask.titre === "") return;
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    if (tasks[index].done === false) return;
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
      <h2>Nombre de tâches à faire : {countNoDoneTask()}</h2>
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
