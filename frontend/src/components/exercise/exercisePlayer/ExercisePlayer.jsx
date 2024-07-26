import React, { useState } from "react";
import styles from "./ExercisePlayer.module.css";

import PlayerHeader from "../../shared/playerHeader/PlayerHeader";
import Player from "../../Player";

import { formatTime } from "../../../utils/utils";

function ExercisePlayer({ type }) {
  const [timeLeft, setTimeLeft] = useState(0);

  const handleTimeUpdate = (time) => {
    setTimeLeft(time);
  };

  return (
    <div className={styles.player}>
      <div className={styles.playerContainer}>
        <PlayerHeader title="Nome do Exercício" time={formatTime(timeLeft)} />
        <Player onTimeUpdate={handleTimeUpdate} />
        <div className={styles.description}>
          <p>
            <strong>Esse vídeo é apenas ilustrativo.</strong>
            <br></br> Os exercícios serão adaptados para que sejam feitos sentados, sem necessidade de uso de muito
            espaço.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExercisePlayer;
