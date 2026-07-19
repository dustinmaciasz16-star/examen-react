import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-contenido">
        <h1>Catálogo de Jugadores  🇪🇸 España - 🇦🇷 Argentina</h1>
        <p>
          En esta aplicación puedes consultar información de diferentes
          futbolistas obtenida desde una API. Aquí encontrarás datos como su
          fotografía, club, selección, posición, número de camiseta, edad, que son 
          los detalles mas importantes de cada jugador.
        </p>
      </div>
    </header>
  );
}
export default Header;