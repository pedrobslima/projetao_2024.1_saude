import React from "react";
import styles from "./FormHeader.module.css";

import ProgressBar from "./ProgressBar";

const FormHeader = ({ step }) => {
  return (
    <div className={styles.formHeaderContainer}>
      <div className={styles.formHeader}>
        <h3>{`Perguntas ${step} de 8`}</h3>
        <div className={styles.progress}>
          <h3>{`${(step / 8) * 100}%`}</h3>
          <ProgressBar state={step} />
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
