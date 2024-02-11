import { ImageCard } from "../ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ fechResult, onClick }) => {
  return (
    <ul className={css.imgGallery}>
      {fechResult.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            onClick(item);
          }}
        >
          <ImageCard param={item} />
        </li>
      ))}
    </ul>
  );
};
