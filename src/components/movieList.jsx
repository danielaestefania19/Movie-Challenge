import  { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { TMDB_API_KEY } from '../config';
import './MovieList.css'; 

function MovieList(props) {
  const { filters } = props;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`);
        const data = await response.json();

        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [filters]);

  return (
    <div className="movie-list">
      {loading ? (
        <div>Loading...</div>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <p>{movie.title}</p>
          </div>
        ))
      )}
    </div>
  );
}
MovieList.propTypes = {
  filters: PropTypes.object.isRequired,
};

export default MovieList;



