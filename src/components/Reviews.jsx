import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApi } from '../services/Api';

const Reviews = () => {
  const params = useParams();
  const getCredits = `movie/${params.movieId}/reviews`;
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getApi(getCredits);
        setMovieReviews(data);
      } catch (error) {
        alert(error.message);
      }
    };

    getRequest();
  }, [getCredits]);

  return (
    <div>
      {movieReviews.total_pages !== 0 ? (
        <ul>
          {movieReviews.results?.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Autor: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h4>We don`t have any reviews for this movie.</h4>
      )}
    </div>
  );
};

export default Reviews;
