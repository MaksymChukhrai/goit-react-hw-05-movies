import React from 'react';
import { DataMovie } from 'pages/MovieDetails/MovieDetails.styled';
import imageMovie from '../components/Details/imageMovie.png';

const MovieInfo = ({ movieInfo }) => {
  const {
    poster_path,
    title,
    name,
    vote_average,
    overview,
    genres,
    release_date,
  } = movieInfo;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : imageMovie;
  const year = release_date?.slice(0, 4);
  const score = vote_average?.toFixed(2);
  const showGenres = genres?.map(({ name }) => name).join(', ');

  return (
    <DataMovie>
      <div>
        <img src={poster} alt={title || name} />
      </div>
      <div>
        <h2>
          {title || name}({year})
        </h2>
        <p>User Score: {score}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{showGenres}</p>
      </div>
    </DataMovie>
  );
};

export default MovieInfo;
