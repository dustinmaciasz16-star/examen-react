import "./JugadorCard.css";

function JugadorCard({ jugador }) {
  const imagenRespaldo = "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg";

  return (
    <div className="jugador-card">
      <img src={jugador.photoUrl || imagenRespaldo} alt={jugador.name} className="jugador-img" onError={(e) => { e.target.src = imagenRespaldo;}}/>

      <div className="jugador-info">
        <h2>{jugador.name}</h2>

        <p>
          <strong>⚽ Club:</strong> {jugador.currentClub}
        </p>

        <p>
          <strong>🌎 Selección:</strong> {jugador.nationalTeam}
        </p>

        <p>
          <strong>📍 Posición:</strong> {jugador.position}
        </p>

        <p>
          <strong>🔢 Número:</strong> #{jugador.number}
        </p>

        <p>
          <strong>🎂 Edad:</strong> {jugador.age}
        </p>
      </div>
    </div>
  );
}
export default JugadorCard;