import { Outlet, useLocation } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import {
  Cont,
  Button,
  MovieInfo,
  Poster,
  Details,
  Title,
  Desc,
  Subtitle,
  Additional,
} from './MovieDetails.styled';
import { useEffect, useState } from 'react';
import { getMovie } from '../../API';

const score = vote_average => {
  return parseInt(vote_average * 10);
};

const drawGenres = genres => {
  if (!genres) return '';
  return genres.map(genre => genre.name).join(', ');
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const location = useLocation();
  let { state } = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      const response = await getMovie({ id: movieId, controller });
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
      <Button to={location?.state?.from ? location?.state?.from : '/'}>
        Go back
      </Button>
      <MovieInfo>
        <Poster src="" alt="" />
        <Details>
          <Title>{data.title}</Title>
          <Desc>User score: {score(data.vote_average)}%</Desc>
          <Subtitle>Overview</Subtitle>
          <Desc>{data.overview}</Desc>
          <Subtitle>Genres</Subtitle>
          <Desc>{drawGenres(data.genres)}</Desc>
        </Details>
      </MovieInfo>
      <Additional>
        <p>Additional Information</p>
        <Link state={{ from: state?.from || '/' }} to="cast">
          Cast
        </Link>
        <Link state={{ from: state?.from || '/' }} to="reviews">
          Review
        </Link>
      </Additional>
      <Outlet />
    </Cont>
  );
};

export default MovieDetails;
