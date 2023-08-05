import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApi } from '../services/Api';
import images from './Details/images.png';
import { CastImg } from 'pages/MovieDetails/MovieDetails.styled';

const Cast = () => {
  const params = useParams();
  const getCredits = `movie/${params.movieId}/credits`;
  const [movieInfos, setMovieInfo] = useState([]);

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getApi(getCredits);
        setMovieInfo(data.cast);
      } catch (error) {
        alert(error.message);
      }
    };

    getRequest();
  }, [getCredits]);

  return (
    <div>
      <ul>
        {movieInfos.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <CastImg
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : images
              }
              alt={name}
            />
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
