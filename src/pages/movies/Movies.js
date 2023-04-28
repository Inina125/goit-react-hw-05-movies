import MoviesList from '../../components/moviesList/MoviesList';
import { FormCont, Search } from './Movies.styled';
import { useEffect, useRef, useState } from 'react';
import { searchMovie } from '../../API';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const searchRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const urlQuery = searchParams.get('query');

  const handleSubmit = async e => {
    e.preventDefault();
    const query = searchRef.current.value;
    const response = await searchMovie(query);
    setData(response);
    setSearchParams({ query: query });
  };

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      const response = await searchMovie(urlQuery);
      setData(response);
    };
    if (urlQuery) {
      getData();
    }
    return () => {
      controller.abort();
    };
  }, [urlQuery]);

  return (
    <>
      <FormCont onSubmit={handleSubmit}>
        <Search ref={searchRef} />
      </FormCont>
      <MoviesList
        from="movies"
        query={searchRef?.current?.value || urlQuery}
        movies={data}
      />
    </>
  );
};

export default Movies;
