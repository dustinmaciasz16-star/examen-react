import { useEffect, useState } from "react";
import "./JugadorList.css";
import JugadorCard from "./JugadorCard";

function JugadorList({ actualizarTotal }) {
  const [jugadores, setJugadores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function obtenerJugadores() {
      try {
        const respuesta = await fetch("https://jugadores.up.railway.app/players");

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la información.");
        }

        const datos = await respuesta.json();

        setJugadores(datos.data);
        actualizarTotal(datos.data.length);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerJugadores();
  }, [actualizarTotal]);

  if (cargando) {
    return <h2 className="mensaje">Cargando jugadores...</h2>;
  }

  if (error) {
    return <h2 className="mensaje error">{error}</h2>;
  }

  if (jugadores.length === 0) {
    return <h2 className="mensaje">No hay jugadores disponibles.</h2>;
  }

  return (
    <section className="jugador-list">
      {jugadores.map((jugador) => (
        <JugadorCard key={jugador.id} jugador={jugador} />
      ))}
    </section>
  );
}
export default JugadorList;