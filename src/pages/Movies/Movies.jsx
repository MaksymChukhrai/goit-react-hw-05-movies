import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getApi } from '../../services/Api';
import { useEffect, useState } from 'react';
import { SearchContainer, ListContainer, SearchForm } from './Movies.styled';
import MovieList from 'components/MovieList';

const getSearchMovie = 'search/movie';

const Movies = () => {
  const [dataSubmits, setDataSubmit] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchParams.size) return;
    const getSearchRequest = async search => {
      try {
        const { data } = await getApi(getSearchMovie, search);
        if (data.results.length > 0) {
          setDataSubmit(data.results);
        } else alert('Sorry, there is no movie with that name!');
      } catch (error) {
        alert(error.message);
      }
    };
    getSearchRequest(query);
  }, [query, searchParams, setSearchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.input.value.toLowerCase().trim();
    if (!query) return alert('Please enter a movie title!');
    setSearchParams({ query });
    evt.target.reset();
  };

  return (
    <SearchContainer>
      <ListContainer>
        <SearchForm onSubmit={handleSubmit}>
          <label>
            <input name="input" type="text" defaultValue={query} />
          </label>
          <button name="submit" type="submit">
            Search
          </button>
        </SearchForm>
        {dataSubmits.length > 0 && <MovieList data={dataSubmits} />}
      </ListContainer>
    </SearchContainer>
  );
};

export default Movies;
