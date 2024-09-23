import css from "./ImageCard.module.css";
import { FC } from "react";
import { ImageCardType } from "../../types";

const ImageCard:FC<ImageCardType> = ({ image, openModal }) => {
  return (
    <div className={css.imgContainer}>
      <img
        onClick={() => {
          openModal(image.urls.regular, image.alt_description);
        }}
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
