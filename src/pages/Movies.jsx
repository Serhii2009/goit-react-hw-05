const Movies = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;
