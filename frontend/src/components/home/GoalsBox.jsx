import React from "react";
import styles from "./GoalsBox.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faClock } from "@fortawesome/free-solid-svg-icons";

const GoalsBox = ({
  exercisesCompleted = 0,
  totalExercises = 4,
  timeSpent = 0,
  totalTime = 10,
}) => {
  return (
    <div className={styles.goalsContainer}>
      <h3 className={styles.header}>Meta de exercícios</h3>
      <div className={styles.goals}>
        <div className={styles.goal}>
          <FontAwesomeIcon icon={faMedal} className={styles.icon} />
          <div className={styles.text}>
            {exercisesCompleted}/{totalExercises}
          </div>
        </div>
        <div className={styles.goal}>
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          <div className={styles.text}>
            {timeSpent}/{totalTime} min
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsBox;
