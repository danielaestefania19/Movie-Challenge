// src/App.jsx
//import  { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movieList';
import BottomMenu from './components/BottomMenu';

function App() {
  return (
    <div className="App">
      <BottomMenu /> {}
      <header className="App-header">
        <h1>Películas Populares</h1>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;







