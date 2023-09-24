// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';


// function MovieDetail({ movieId }) {
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const apiKey = 'aed86604ab940ab3a821d5f03c7bd06b'; // Reemplaza con tu clave de API de TMDB
//     const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es`;

//     axios.get(apiUrl)
//       .then((response) => {
//         setMovie(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [movieId]);

//   if (!movie) {
//     return null;
//   }

//   return (
//     <div className="movie-detail">
//       <h2>{movie.title}</h2>
//       <p>{movie.overview}</p>
//       <p>Calificación: {movie.vote_average}</p>
//     </div>
//   );
// }

// MovieDetail.propTypes = {
//     movieId: PropTypes.number.isRequired, // Especifica el tipo esperado y que es requerido
//   };

// export default MovieDetail;
