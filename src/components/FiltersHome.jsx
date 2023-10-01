// import { useState } from 'react';
// import PropTypes from 'prop-types'; 

// function FiltersHome(props) {
//     const { onApplyFilters } = props;
//   const [selectedGenre, setSelectedGenre] = useState('all');
//   const [selectedYear, setSelectedYear] = useState('');

//   const handleApplyFilters = () => {
//     // Llama a la función onApplyFilters para pasar los filtros seleccionados
//     onApplyFilters(selectedGenre, selectedYear);
//   };

//   return (
//     <div className="filters-home">
//       <h3>Filtros</h3>
//       <label htmlFor="genre">Género:</label>
//       <select id="genre" onChange={(e) => setSelectedGenre(e.target.value)}>
//         <option value="all">Todos</option>
//         <option value="action">Acción</option>
//         <option value="comedy">Comedia</option>
//         <option value="drama">Drama</option>
//         {/* Agrega más opciones de género según sea necesario */}
//       </select>
//       <label htmlFor="year">Año de Estreno:</label>
//       <input
//         type="text"
//         id="year"
//         placeholder="Ejemplo: 2022"
//         value={selectedYear}
//         onChange={(e) => setSelectedYear(e.target.value)}
//       />
//       {/* Botón para aplicar los filtros */}
//       <button onClick={handleApplyFilters}>Aplicar Filtros</button>
//     </div>
//   );
// }

// FiltersHome.propTypes = {
//     onApplyFilters: PropTypes.func.isRequired,
//   };

// export default FiltersHome;

