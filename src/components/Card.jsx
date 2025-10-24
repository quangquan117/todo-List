export default function Card( { titre, done, onClick, deleteTask, index}) {
    return (
        <div className={done ? "check" : "noCheck"}>
            <h3>{titre}</h3>
            <button onClick={onClick}>Done?</button>
            <button onClick={() => deleteTask(index)}>Supprimer</button>
        </div>
    )
}