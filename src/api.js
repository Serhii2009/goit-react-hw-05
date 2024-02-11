import axios from "axios";

export const trendingMovie = async ({ abortController }) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day`,
    {
      params: {
        language: "en-US",
        api_key: "e2b5530af17d349e2b5f74d8fb4b3dea",
      },
      signal: abortController.signal,
    }
  );
  return response.data;
};
