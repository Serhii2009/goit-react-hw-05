import { SearchBox } from "../components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import { MoviList } from "../components/MoviList/MoviList";
import { getMovieByQuery } from "../api";
import { useSearchParams } from "react-router-dom";

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query) {
      const response = await getMovieByQuery(query);
      setSearchResults(response.data.results);
      setSearchParams({
        query: encodeURIComponent(query),
      });
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const initialQuery = searchParams.get("query");
    if (initialQuery) {
      handleSearch(encodeURIComponent(initialQuery));
    }
  }, []);

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      {searchQuery && <MoviList movies={searchResults} />}
    </div>
  );
};
