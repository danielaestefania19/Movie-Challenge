import { useState, useEffect } from 'react';
import '../App.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const TMDB_API_KEY = 'aed86604ab940ab3a821d5f03c7bd06b';

  useEffect(() => {
    let TMDB_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;

    if (searchQuery) {
      TMDB_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${searchQuery}`;
    }

    fetch(TMDB_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMovieClick = (movie) => {
    // Mostrar la descripción del movie seleccionado
    setSelectedMovie(movie);
    setShowDescription(true);
  };

  const handleDescriptionClose = () => {
    // Ocultar la descripción
    setShowDescription(false);
  };



  return (
    <div>
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar películas..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="search-input"
      />
      <button className="search-submit">
        Buscar
      </button>
    </div>
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
            onClick={() => handleMovieClick(movie)} 
          />
          <p className="movie-title">{movie.title}</p>
        </div>
      ))}
       {/* ... (otros elementos) */}
       {showDescription && (
        <div className="description-popup">
          <button className="close-button" onClick={handleDescriptionClose}>
            Cerrar
          </button>
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default MovieList;








