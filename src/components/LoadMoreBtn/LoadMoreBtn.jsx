import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={css.loudButton} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
