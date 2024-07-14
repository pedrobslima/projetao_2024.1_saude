import React from "react";
import styles from "./UnexpectedPain.module.css";

import FeelingStatusButton from "./FeelingStatusButton";

const UnexpectedPain = () => {
  return (
    <div className={styles.unexpectedPain}>
      <h3>Dor inesperada?</h3>
      <div className={styles.painOptions}>
        <FeelingStatusButton status={4} />
        <FeelingStatusButton status={5} />
      </div>
    </div>
  );
};

export default UnexpectedPain;
