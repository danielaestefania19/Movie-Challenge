// import PropTypes from 'prop-types'; 
// // import './favoritesList.css'; // Agrega un archivo de estilos favoritesList.css

// function FavoritesList(props) {
//     const { favorites } = props;
  
//     return (
//       <div className="favorites-list">
//         <h2>Tus Favoritos</h2>
//         {favorites.length === 0 ? (
//           <p>No tienes favoritos.</p>
//         ) : (
//           <ul>
//             {favorites.map((favorite) => (
//               <li key={favorite.id}>{favorite.title}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
  
//   // Define PropTypes para el componente
//   FavoritesList.propTypes = {
//     favorites: PropTypes.array.isRequired,
//   };
  
//   export default FavoritesList;