export default function Card( { titre, done, onClick } ) {
    return (
        <div className={done ? "check" : "noCheck"}>
            <h3>{titre}</h3>
            <button onClick={onClick}>Done?</button>
            {/* Ajouter le bouton supprimer */}
        </div>
    )
}