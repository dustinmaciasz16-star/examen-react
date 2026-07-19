import "./Navbar.css";

function Navbar({ totalJugadores }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>⚽ Catálogo de Jugadores</h2>
      </div>

      <div className="navbar-contador">
        <span>Jugadores: {totalJugadores}</span>
      </div>
    </nav>
  );
}

export default Navbar;