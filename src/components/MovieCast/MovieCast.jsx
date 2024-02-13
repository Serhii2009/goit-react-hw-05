import { getCreditsMovie } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../Loader/Loader";
import { CastCard } from "../CastCard/CastCard";

export default function MovieCast() {
  const { movieId } = useParams();
  const [loadind, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getCreditsMovie(movieId);
        setCast(response.data.cast);
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
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {loadind && <Loader />}
      {cast && cast.length > 0 ? (
        <CastCard cast={cast} />
      ) : (
        <h2>We don`t have any cast for this movie</h2>
      )}
    </>
  );
}
