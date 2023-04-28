import { ListItem, MovieLink, MoviesListCont } from './MoviesList.styled';
import PropTypes from 'prop-types';

const fromLink = ({ from, query }) => {
  if (!from) return '/';
  let link = `/${from}`;
  if (query) {
    link += `?query=${query}`;
  }
  return link;
};

const MoviesList = ({ movies, from, query }) => {
  return (
    <MoviesListCont>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <MovieLink
            state={{ from: fromLink({ from, query }) }}
            to={`/movies/${movie.id}`}
          >
            {movie.title}
          </MovieLink>
        </ListItem>
      ))}
    </MoviesListCont>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  query: PropTypes.string,
  from: PropTypes.string,
};

export default MoviesList;
