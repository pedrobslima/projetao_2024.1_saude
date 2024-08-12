import React from "react";
import styles from "./FormHeader.module.css";

const FormHeader = ({ answers }) => {
  return (
    <div className={styles.formHeaderContainer}>
      <div className={styles.formHeader}>
        <h3>{`Perguntas ${answers} de 8`}</h3>
        <h3>{`${(answers / 8) * 100}%`}</h3>
      </div>
    </div>
  );
};

export default FormHeader;
