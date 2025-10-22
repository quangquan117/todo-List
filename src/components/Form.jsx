import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task === "") return;
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;