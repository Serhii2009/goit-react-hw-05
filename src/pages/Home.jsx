import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { trendingMovie } from "../api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchMovies = async () => {
      try {
        const data = await trendingMovie({ abortController });
        setMovies(data.results);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    };

    fetchMovies();

    return () => abortController.abort();
  }, []);

  return (
    <ul>
      {error && <p>OOOOPS! ERROR!</p>}
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink to={`/movie/${movie.id}`}>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Home;
