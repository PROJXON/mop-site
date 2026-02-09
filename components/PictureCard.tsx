import React from "react";
import styles from "./PictureCard.module.css";

interface PictureCardProps {
  imageUrl: string;
  description: string;
  alt?: string;
}

const PictureCard: React.FC<PictureCardProps> = ({
  imageUrl,
  description,
  alt,
}) => {
  return (
    <div className={styles.momentCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={alt || description} className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PictureCard;
