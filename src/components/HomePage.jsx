//import React from 'react';
import FiltersHome from './FiltersHome';
import PropTypes from 'prop-types'

function HomePage(props) {
    const { onApplyFilters } = props;
    return (
      <div>
        <FiltersHome onApplyFilters={onApplyFilters} />
        {/* Contenido de la página de inicio */}
      </div>
    );
  }
  HomePage.propTypes = {
    onApplyFilters: PropTypes.func.isRequired,
  };

export default HomePage;

