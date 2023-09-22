// src/App.jsx
import React from 'react';
import './App.css';
import MovieList from './components/movieList';
import BottomMenu from './components/BottomMenu'; // Importa el componente BottomMenu

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieList />
      </header>
      <BottomMenu /> {}
    </div>
  );
}

export default App;



