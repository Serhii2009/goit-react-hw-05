import { HiSearch } from "react-icons/hi";
import css from "../SearchBox/SearchBox.module.css";
import { useState } from "react";

export const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleForm = (ev) => {
    ev.preventDefault();
    onSearch(query);
    setQuery("");
  };

  const handleInputChange = (ev) => {
    setQuery(ev.target.value);
  };

  return (
    <form onSubmit={handleForm}>
      <HiSearch className={css.icon} />

      <input
        className={css.searchForm}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
