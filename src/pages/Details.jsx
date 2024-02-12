import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { GoBack } from "../../components/GoBack/GoBack";
import { MyLoader } from "../../components/Loader/Loader";
import { MovieCard } from "../../components/MovieCard/MovieCard";

import { getMovieById } from "../api";

export default function Details() {
  const { movieId } = useParams();
  const [loadind, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
  console.log(location.state);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getMovieById(movieId);
        setMovie(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <>
      <GoBack to={backLinkHref} />
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {loadind && <MyLoader />}
      {movie && <MovieCard card={movie} />}
    </>
  );
}
