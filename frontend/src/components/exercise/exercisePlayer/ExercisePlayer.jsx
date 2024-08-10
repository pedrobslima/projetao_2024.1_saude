import React, { useState } from "react";
import styles from "./ExercisePlayer.module.css";
import { useParams } from "react-router-dom";

import PlayerHeader from "../../shared/playerHeader/PlayerHeader";
import Player from "../../Player";

import { formatTime, getExerciseTitle } from "../../../utils/utils";

function ExercisePlayer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const { area } = useParams();

  const handleTimeUpdate = (time) => {
    setTimeLeft(time);
  };

  return (
    <div className={styles.player}>
      <div className={styles.playerContainer}>
        <PlayerHeader title={getExerciseTitle(area)} time={formatTime(timeLeft)} backgroundColor="#eed38f" />
        <Player onTimeUpdate={handleTimeUpdate} />
        <div className={styles.description}>
          <p>
            <strong>Esse vídeo é apenas ilustrativo.</strong>
            <br /> Os exercícios serão adaptados para que sejam feitos sentados, sem necessidade de uso de muito espaço.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExercisePlayer;
