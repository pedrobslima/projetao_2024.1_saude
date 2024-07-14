import React from "react";
import styles from "./Home.module.css";

import GoalsBox from "../components/home/GoalsBox";
import FeelingStatus from "../components/home/FeelingStatus";
import BreakTimes from "../components/home/BreakTimes";
import FavoriteMusicalGenres from "../components/home/FavoriteMusicalGenres";
import UnexpectedPain from "../components/home/UnexpectedPain";
import Settings from "../components/home/Settings";

const Home = () => {
  return (
    <div className={styles.home}>
      <div>
        <FeelingStatus />
        <BreakTimes
          title="Pausas para exercícios"
          breaks={[
            { time: "9h" },
            { time: "11h" },
            { time: "14h" },
            { time: "16h" },
          ]}
        />
        <BreakTimes
          title="Pausas para relaxar"
          breaks={[{ time: "13h" }, { time: "17h" }]}
        />
        <FavoriteMusicalGenres stylesList={["White Noise", "Lo-fi", "Jazz"]} />
      </div>
      <div>
        <GoalsBox
          exercisesCompleted={0}
          totalExercises={4}
          timeSpent={0}
          totalTime={10}
        />
        <Settings />
        <UnexpectedPain />
      </div>
    </div>
  );
};

export default Home;
