import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from '../../API';
import { Character, Cont, InfoCont, Item, Name, Photo } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      const response = await getCast({ id: movieId, controller });
      setData(response);
    };
    getData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!data) return null;

  return (
    <Cont>
      {data.map(item => (
        <Item key={item.id}>
          <Photo
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
            alt={item.name}
          />
          <InfoCont>
            <Name>{item.name}</Name>
            <Character>Character: {item.character}</Character>
          </InfoCont>
        </Item>
      ))}
    </Cont>
  );
};

export default Cast;
