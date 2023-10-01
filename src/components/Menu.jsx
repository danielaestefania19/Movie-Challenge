import { Link } from 'react-router-dom';
//import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/peliculas">Peliculas</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to= "/favoritos">Favoritos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

