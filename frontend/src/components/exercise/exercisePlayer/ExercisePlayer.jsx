import React from "react";
import styles from "./ExercisePlayer.module.css";

import PlayerHeader from "../../shared/playerHeader/PlayerHeader";
import Player from "../../Player";

function ExercisePlayer({ type }) {
  return (
    <div className={styles.player}>
      <div className={styles.playerContainer}>
        <PlayerHeader title="Nome do Exercício" />
        <Player />
        <div className={styles.description}>
          <p>Descrição descrição</p>
          <p>Descrição descrição</p>
        </div>
      </div>
    </div>
  );
}

export default ExercisePlayer;
