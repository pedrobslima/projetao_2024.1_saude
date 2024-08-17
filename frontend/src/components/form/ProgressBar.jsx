import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ state }) => {
  let width = 0;
  let backgroundColor = "";

  if (state === 4) {
    width = 70;
    backgroundColor = "#FAB79F";
  } else if (state === 8) {
    width = 140;
    backgroundColor = "#7CAB99";
  }

  return (
    <div className={styles.progressBar}>
      <div className={styles.insideBar} style={{ width: `${width}px`, backgroundColor }}></div>
    </div>
  );
};

export default ProgressBar;
