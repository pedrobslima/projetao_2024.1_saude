import React from "react";
import styles from "./ExercisePlayer.module.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import VideoContainer from "../../VideoContainer";
import PlayerHeader from "../../shared/playerHeader/PlayerHeader";

function Player({ type }) {
  const navigate = useNavigate();

  const handleConcludedClick = (id) => {
    navigate("./completo");
  };

  return (
    <div className={styles.player}>
      <div className={styles.playerContainer}>
        <PlayerHeader title="Nome do Exercício" />
        <div className={styles.content}>
          <div className={styles.videoContainer}>
            <VideoContainer type={type} />
          </div>
          <div className={styles.controls}>
            <button className={styles.playButton}>
              <FontAwesomeIcon icon={faPlay} />
            </button>
            <button className={styles.repeatButton}>
              <FontAwesomeIcon icon={faRedoAlt} />
            </button>
            <button className={styles.skipButton}>Pular</button>
            <button
              className={styles.concludedButton}
              onClick={() => handleConcludedClick()}
            >
              Concluido
            </button>
          </div>
        </div>
        <div className={styles.description}>
          <p>Descrição descrição</p>
          <p>Descrição descrição</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
