import React from "react";
import styles from "./ExerciseCompletePage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faPencilAlt, faRedo, faHome, faMedal } from "@fortawesome/free-solid-svg-icons";

const ExerciseCompletePage = () => {
  const navigate = useNavigate();

  const handleMenuButtonClick = () => {
    navigate("/");
  };

  const handleRepeatButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Extensão e Flexão dos punhos com o cotovelo estendido</h1>
      <p className={styles.subtitle}>Concluído!</p>
      <div className={styles.scoreContainer}>
        <FontAwesomeIcon icon={faMedal} className={styles.scoreIcon} />
        <div className={styles.score}>1/5</div>
      </div>
      <p className={styles.improvement}>Você acaba de melhorar ----</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => handleMenuButtonClick()}>
          <FontAwesomeIcon icon={faHome} />
          Voltar ao menu
        </button>
        <button className={styles.button} onClick={() => handleRepeatButtonClick()}>
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
