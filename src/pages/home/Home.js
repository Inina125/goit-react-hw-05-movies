import { useEffect, useState } from 'react';
import { getTrending } from '../../API';
import MoviesList from '../../components/moviesList/MoviesList';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      const data = await getTrending(controller);
      setData(data);
    };
    getData();
    return () => {
      controller.abort();
    };
  }, []);

  if (!data) return null;

  return <MoviesList movies={data} />;
};

export default Home;
