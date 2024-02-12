import { MoviList } from "../components/MoviList/MoviList";
import { getTrends } from "../api";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setLoading(true);
        const response = await getTrends();
        setMovies(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {loading && <p>Loading...</p>}
      {movies.length > 0 && <MoviList movies={movies} />}
    </div>
  );
};
export default Home;
