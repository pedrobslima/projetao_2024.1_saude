import React from "react";
import styles from "./BreakTimes.module.css";

import EditButton from "./EditButton";

const BreakTimes = ({ title, breaks }) => {
  return (
    <div className={styles.breakTimes}>
      <h3>{title}</h3>
      <div className={styles.breakList}>
        <div className={styles.leftContainer}>
          <div className={styles.firstBreakItem}>
            <p className={styles.nextSchedule}>Próximo horário:</p>
            <div>
              <p className={styles.nextScheduleTimer}>{breaks[0].time}</p>
              <button>Desativar</button>
            </div>
          </div>
          <div className={styles.remainingBreakItems}>
            {breaks.slice(1).map((breakTime, index) => (
              <div key={index} className={styles.breakItem}>
                <div>{breakTime.time}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightContainer}>
          <EditButton list="Horários" />
        </div>
      </div>
    </div>
  );
};

export default BreakTimes;
