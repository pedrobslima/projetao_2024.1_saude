import React from "react";
import styles from "./ExerciseCompletePage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faRedo,
  faHome,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

const ExerciseCompletePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nome do exercício</h1>
      <p className={styles.subtitle}>Concluído!</p>
      <div className={styles.scoreContainer}>
        <FontAwesomeIcon icon={faMedal} className={styles.scoreIcon} />
        <div className={styles.score}>1/5</div>
      </div>
      <p className={styles.improvement}>Você acaba de melhorar ----</p>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faHome} />
          Voltar ao menu
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faRedo} />
          Repetir exercício
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faPencilAlt} />
          Atualizar informações
        </button>
      </div>
    </div>
  );
};

export default ExerciseCompletePage;
