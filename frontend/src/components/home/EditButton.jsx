import React from "react";
import styles from "./EditButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const EditButton = ({ list = "" }) => {
  return (
    <div className={styles.edit}>
      <p>{`Editar ${list}`}</p>
      <button className={styles.editButton}>
        <FontAwesomeIcon icon={faPencilAlt} className={styles.icon} />
      </button>
    </div>
  );
};

export default EditButton;
