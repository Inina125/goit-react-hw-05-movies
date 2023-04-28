import React, { lazy } from 'react';
import GlobalStyle from 'components/GlobalStyles';
import { AppCont } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import axios from 'axios';

const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const App = () => {
  return (
    <AppCont>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </AppCont>
  );
};

export default App;
