import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MoviesContainer,
  MoviesGoBack,
} from './MovieDetails/MovieDetails.styled';

const NotFound = () => {
  const location = useLocation();
  return (
    <MoviesContainer>
      <MoviesGoBack to={location.state?.from ?? '/'}>
        &#129044; Go back
      </MoviesGoBack>
      <h1>Not Found</h1>
      <Link to="/">Home</Link>
    </MoviesContainer>
  );
};

export default NotFound;