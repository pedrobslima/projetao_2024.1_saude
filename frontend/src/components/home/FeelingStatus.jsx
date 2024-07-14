import React from "react";
import styles from "./FeelingStatus.module.css";

import FeelingStatusButton from "./FeelingStatusButton";

const FeelingStatus = () => {
  return (
    <div className={styles.feelingStatus}>
      <h1>Olá, user!</h1>
      <p>Como você se sente?</p>
      <div className={styles.feelings}>
        <FeelingStatusButton status={1} />
        <FeelingStatusButton status={2} />
        <FeelingStatusButton status={3} />
      </div>
    </div>
  );
};

export default FeelingStatus;
