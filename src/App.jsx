import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import MovieList from './components/movieList';
import SeriesList from './components/SeriesList';
import FavoritesList from './components/FavoritesList';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedYear, setSelectedYear] = useState('');

  const handleApplyFilters = (genre, year) => {
    setSelectedGenre(genre);
    setSelectedYear(year);
  };

  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
        <Route
          path="/"
          exact
          render={() => (
            <HomePage onApplyFilters={handleApplyFilters} />
          )}
        />
        <Route
          path="/peliculas"
          exact
          render={() => (
            <MovieList filters={{ selectedGenre, selectedYear }} />
          )}
        />
        <Route
          path="/series"
          exact
          render={() => (
            <SeriesList filters={{ selectedGenre, selectedYear }} />
          )}
        />
        <Route
          path="/favoritos"
          exact
          render={() => (
            <FavoritesList filters={{ selectedGenre, selectedYear }} />
          )}
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;










