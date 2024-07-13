import React, { useState } from "react";
import styles from "./ExercisePlayer.module.css";

import PlayerHeader from "../../shared/playerHeader/PlayerHeader";
import Player from "../../Player";

function ExercisePlayer({ type }) {
  const [timeLeft, setTimeLeft] = useState(0);

  const handleTimeUpdate = (time) => {
    setTimeLeft(time);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className={styles.player}>
      <div className={styles.playerContainer}>
        <PlayerHeader title="Nome do Exercício" time={formatTime(timeLeft)} />
        <Player onTimeUpdate={handleTimeUpdate} />
        <div className={styles.description}>
          <p>Descrição descrição</p>
          <p>Descrição descrição</p>
        </div>
      </div>
    </div>
  );
}

export default ExercisePlayer;
