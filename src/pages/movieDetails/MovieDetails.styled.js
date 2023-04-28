import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid #888;
  padding: 4px 10px;
  width: 200px;
  height: 30px;
  line-height: 28px;
  margin: 15px;
  cursor: pointer;
  color: #227722;
`;

const MovieInfo = styled.div`
  display: flex;
`;

const Poster = styled.img`
  height: 300px;
  max-width: 300px;
  margin-right: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;

const Desc = styled.p``;

const Subtitle = styled.h2``;

const Additional = styled.div`
  display: flex;
  gap: 10px;
  padding: 30px;
  border-top: 1px solid #333;
`;

export {
  Cont,
  Button,
  MovieInfo,
  Poster,
  Details,
  Title,
  Desc,
  Subtitle,
  Additional,
};
