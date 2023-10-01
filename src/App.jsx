//import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de usar 'Routes' en lugar de 'Switch'
import Menu from './components/Menu';
// import Filters from './components/Filters';
import MovieList from './components/movieList';

function HomePage() {
  return (
    <div>
      {/* Contenido de la página de inicio */}
      <h2>Bienvenido a la página de inicio</h2>
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Mi Aplicación de Películas</h1>
          <Menu />
        </header>
        <main>
          <Routes>
          <Route path="/" element={<HomePage />} /> 
            {/* <Route path="/peliculas" element={<Filters />} /> */}
            <Route path="/peliculas" element={<MovieList />} />
            {/* Agrega más rutas según sea necesario */}
          </Routes>
        </main>
        <footer>
          <p>Derechos de autor © 2023</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;









