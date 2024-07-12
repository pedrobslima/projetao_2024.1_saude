import React from "react";
import styles from "./Player.module.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import VideoContainer from "./VideoContainer";

const Player = () => {
  const navigate = useNavigate();

  const handleConcludedClick = (id) => {
    navigate("./completo");
  };

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.videoContainer}>
          <VideoContainer type="exercicio" />
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
    </div>
  );
};

export default Player;
