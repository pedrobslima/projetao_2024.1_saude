import React from "react";
import styles from "./FavoriteMusicalGenres.module.css";

import EditButton from "./EditButton";

const FavoriteMusicalGenres = ({ stylesList }) => {
  return (
    <div className={styles.favoriteMusicalGenres}>
      <div>
        <h3>Seus estilos</h3>
        <div className={styles.stylesList}>
          {stylesList.map((style, index) => (
            <div key={index} className={styles.styleItem}>
              {style}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteMusicalGenres;
