import React from "react";
import styles from "./ExerciseCompletePage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { faPencilAlt, faRedo, faHome, faMedal } from "@fortawesome/free-solid-svg-icons";

import { getExerciseTitle } from "../../utils/utils";

const ExerciseCompletePage = () => {
  const navigate = useNavigate();
  const { area } = useParams();

  const handleMenuButtonClick = () => {
    navigate("/");
  };

  const handleRepeatButtonClick = () => {
    navigate(-1);
  };

  const handleEditInfoButtonClick = () => {
    navigate("/questionario/1");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{getExerciseTitle(area)}</h1>
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
        <button className={styles.button} onClick={() => handleEditInfoButtonClick()}>
          <FontAwesomeIcon icon={faPencilAlt} />
          Atualizar informações
        </button>
      </div>
    </div>
  );
};

export default ExerciseCompletePage;
