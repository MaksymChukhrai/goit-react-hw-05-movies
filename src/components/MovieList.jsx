import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data.map(({ id, title, name }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default MovieList;