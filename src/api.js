import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "e2b5530af17d349e2b5f74d8fb4b3dea";

export const getTrends = async () => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}`);
};
export const getMovieById = async (movieId) => {
  return await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
};

export const getMovieByQuery = async (query) => {
  return await axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
};

export const getCreditsMovie = async (movieId) => {
  return await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const getReviewsMovie = async (movieId) => {
  return await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
};
