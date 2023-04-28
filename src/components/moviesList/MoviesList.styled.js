import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MoviesListCont = styled.ul`
  margin: 0 15px;
`;

const ListItem = styled.li`
  list-style: none;
  margin: 6px 0;
`;

const MovieLink = styled(Link)`
  font-size: 16px;
  color: #227799;
`;

export { MoviesListCont, ListItem, MovieLink };
