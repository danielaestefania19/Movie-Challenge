// import { useState } from 'react';
// import PropTypes from 'prop-types';

// function Filters({ onFilterChange }) {
//   const [sortBy, setSortBy] = useState('popularity.desc');
//   const [genre, setGenre] = useState('');

//   const handleFilterChange = () => {
//     onFilterChange({ sortBy, genre });
//   };

//   return (
//     <div className="filters">
//       <h2>Filtros</h2>
//       <div className="filter-item">
//         <label>Ordenar por:</label>
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="popularity.desc">Popularidad descendente</option>
//           <option value="popularity.asc">Popularidad ascendente</option>
//           <option value="release_date.desc">Fecha de lanzamiento descendente</option>
//           <option value="release_date.asc">Fecha de lanzamiento ascendente</option>
//         </select>
//       </div>
//       <div className="filter-item">
//         <label>Género:</label>
//         <select value={genre} onChange={(e) => setGenre(e.target.value)}>
//           <option value="">Todos</option>
//           <option value="28">Acción</option>
//           <option value="35">Comedia</option>
//           <option value="18">Drama</option>
//         </select>
//       </div>
//       <div className="filter-button">
//         <button onClick={handleFilterChange}>Aplicar Filtros</button>
//       </div>
//     </div>
//   );
// }

// Filters.propTypes = {
//   onFilterChange: PropTypes.func.isRequired,
// };

// export default Filters;






