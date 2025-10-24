import { useState } from "react"

function TodoApp({addTask}) {
  const [task, setTask] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask({ titre: task, done: false });
    console.log(task);
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
    </div>
  );
}

export default TodoApp;