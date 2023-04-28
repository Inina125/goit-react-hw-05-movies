import axios from 'axios';
const API_KEY = '659ec0491a7a7fd8899a0a31d750ba1c';

const getTrending = async controller => {
  const res = await axios.get(`/trending/movie/week?api_key=${API_KEY}`, {
    signal: controller.signal,
  });
  return res.data.results;
};

const searchMovie = async query => {
  const res = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return res.data.results;
};

const getMovie = async ({ id, controller }) => {
  const res = await axios.get(`movie/${id}?api_key=${API_KEY}`, {
    signal: controller.signal,
  });
  return res.data;
};

const getCast = async ({ id, controller }) => {
  const res = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`, {
    signal: controller.signal,
  });
  return res.data.cast;
};

const getReviews = async ({ id, controller }) => {
  const res = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`, {
    signal: controller.signal,
  });
  return res.data.results;
};

export { getTrending, searchMovie, getMovie, getCast, getReviews };
