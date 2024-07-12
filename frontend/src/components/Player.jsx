import React, { useRef, useState } from "react";
import styles from "./Player.module.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import VideoContainer from "./VideoContainer";

const Player = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleConcludedClick = (id) => {
    navigate("./completo");
  };

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      videoRef.current.togglePlayPause();
      setIsPaused(!isPaused);
    }
  };

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.videoContainer}>
          <VideoContainer ref={videoRef} type="exercicio" />
        </div>
        <div className={styles.controls}>
          <button className={styles.playButton} onClick={handlePlayPauseClick}>
            <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
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
