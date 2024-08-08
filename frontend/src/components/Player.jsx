import React, { useRef, useState } from "react";
import styles from "./Player.module.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import VideoContainer from "./VideoContainer";
import ExerciseBackgroundAudio from "./ExerciseBackgroundAudio";
import { localContextGetInfo } from "./context/localContext";

const link =
  "https://cms-artifacts.motionarray.com/content/motion-array/1163534/Thoughtful_mp3_1710983450.mp3?Expires=2026343758468&Key-Pair-Id=K2ZDLYDZI2R1DF&Signature=cjxkn8Cv5EGDjZj3jmKeFwQ68lZ82jWv5v2qeqvDP5rhCpqwebAdgsyYOxc4XbJJ0N8GCo8m~vAX7-h9WX1qYuq9Y~ctnQ8fwU-KlzUmZv-zrPvlxuynMR8jTsKwxaXGn9PUQxFUYVqTjFicRyoSbxpZMTGfKs0wV87Z4YbFZKN4Deen7zQ5b4SUV9oQ62Sr752BjIbQrHFWtfB08ZMnMcdtSkhL1-QeY6wjLtPHPkusYVB7xo4CUzTqmaOlgZ3aM~Au6HItl4TSeCZXp6UixcJCa7qE-HM92yoivyzR9-gKG9uu1D4MCheJJZokwUHmPXL3EyB9BtV9jfEhWKzALw__";

const Player = ({ onTimeUpdate }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);

  const handleConcluded = (id) => {
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
          <VideoContainer ref={videoRef} onTimeUpdate={onTimeUpdate} onVideoEnd={handleConcluded} type="exercicio" />
        </div>
        <div className={styles.controls}>
          <button className={styles.playButton} onClick={handlePlayPauseClick}>
            <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
          </button>
          <button className={styles.repeatButton}>
            <FontAwesomeIcon icon={faRedoAlt} />
          </button>
          <button className={styles.skipButton}>Pular</button>
          <button className={styles.concludedButton} onClick={() => handleConcluded()}>
            Concluido
          </button>
        </div>
      </div>
      <ExerciseBackgroundAudio src={link} isPaused={isPaused} isMuted={localContextGetInfo("music", "muted")} />
    </div>
  );
};

export default Player;
