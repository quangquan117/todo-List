export default function Card( { titre, done } ) {
    return (
        <div className={done ? "check" : "noCheck"}>
            <h3>{titre}</h3>
            {/* Ajouter le bouton done et supprimer */}
        </div>
    )
}