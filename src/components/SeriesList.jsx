// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'
// import { TMDB_API_KEY } from '../config';
// // import './seriesList.css'; // Agrega un archivo de estilos seriesList.css

// function SeriesList(props) {
//     const { filters } = props;
//     const [series, setSeries] = useState([]);
//     const [loading, setLoading] = useState(true);
    
//     useEffect(() => {
//         const fetchSeries = async () => {
//           try {
//             const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}`);
//             const data = await response.json();

//         setSeries(data.results);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchSeries();
//   }, [filters]);

//   return (
//     <div className="series-list">
//       <h2>Series Populares</h2>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="series-container">
//           {series.map((serie) => (
//             <div key={serie.id} className="serie-item">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
//                 alt={serie.name}
//                 className="serie-poster"
//               />
//               <p>{serie.name}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// SeriesList.propTypes = {
//     filters: PropTypes.object.isRequired,
//   };

// export default SeriesList;
