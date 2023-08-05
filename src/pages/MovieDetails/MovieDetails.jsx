import { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getApi } from 'services/Api';
import { Circles } from 'react-loader-spinner';
import MovieInfo from 'components/MovieInfo';
import NotFound from 'pages/NotFound';
import css from '../../components/Loader/Loader.css';
import {
  MoviesGoBack,
  MoviesSection,
  MoviesContainer,
  AdditionalUl,
  AdditionalLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [errorRequest, setErrorRequest] = useState(false);
  const params = useParams();
  const location = useLocation();
  const pageBack = useRef(location.state?.from ?? '/');
  const getMovie = `/movie/${params.movieId}`;

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getApi(getMovie);
        setMovieInfo(data);
      } catch (error) {
        setErrorRequest(true);
        alert(error.message);
      }
    };

    getRequest();
  }, [getMovie]);

  return (
    <>
      {errorRequest ? (
        <NotFound />
      ) : (
        <>
          <MoviesSection>
            <MoviesContainer>
              <MoviesGoBack to={pageBack.current}>
                &#129044; Go back
              </MoviesGoBack>
              {movieInfo && <MovieInfo movieInfo={movieInfo} />}
            </MoviesContainer>
          </MoviesSection>
          <MoviesSection>
            <MoviesContainer>
              <h4>Additional information</h4>
              <AdditionalUl>
                <li>
                  <AdditionalLink to={`reviews`}>Reviews</AdditionalLink>
                </li>
                <li>
                  <AdditionalLink to={`cast`}>Cast</AdditionalLink>
                </li>
              </AdditionalUl>
            </MoviesContainer>
          </MoviesSection>
          <section>
            <MoviesContainer>
              <Suspense
                fallback={
                  <Circles
                    height="80"
                    width="80"
                    color="#4d78a9"
                    wrapperClass={css.loader}
                  />
                }
              >
                <Outlet />
              </Suspense>
            </MoviesContainer>
          </section>
        </>
      )}
    </>
  );
};

export default MovieDetails;
