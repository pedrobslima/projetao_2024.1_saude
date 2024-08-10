import React from "react";
import styles from "./GoalsBox.module.css";

import target from "../../assets/images/target.png";
import timer from "../../assets/images/timer.png";

const GoalsBox = ({ exercisesCompleted = 0, totalExercises = 4, timeSpent = 0, totalTime = 10 }) => {
  return (
    <div className={styles.goalsContainer}>
      <h3 className={styles.header}>Meta de exercícios</h3>
      <div className={styles.goals}>
        <div className={styles.goal}>
          <img src={target} alt="target" className={styles.icon} />
          <div className={styles.text}>
            {exercisesCompleted}/{totalExercises}
          </div>
        </div>
        <div className={styles.goal}>
          <img src={timer} alt="timer" className={styles.icon} />
          <div className={styles.text}>
            {timeSpent}/{totalTime} min
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsBox;
