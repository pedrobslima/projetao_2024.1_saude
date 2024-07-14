import React, { useState } from "react";
import styles from "./Home.module.css";

import GoalsBox from "../components/home/GoalsBox";
import FeelingStatus from "../components/home/FeelingStatus";
import BreakTimes from "../components/home/BreakTimes";
import FavoriteMusicalGenres from "../components/home/FavoriteMusicalGenres";
import UnexpectedPain from "../components/home/UnexpectedPain";
import Settings from "../components/home/Settings";
import ModalWindow from "../components/home/ModalWindow";
import ModalPainContent from "../components/home/ModalPainContent";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(null);

  const handleOpenModal = (status) => {
    setCurrentStatus(status);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentStatus(null);
  };

  const getModalContent = () => {
    switch (currentStatus) {
      case 1:
      case 4:
        return <ModalPainContent />;
      case 2:
        return (
          <div>
            <h2>Sobre Y</h2>
            <p>Conteúdo para status 2.</p>
          </div>
        );
      case 3:
      case 5:
        return (
          <div>
            <h2>Sobre Z</h2>
            <p>Conteúdo para status 3 e 5.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.home}>
      <div>
        <FeelingStatus onStatusClick={handleOpenModal} />
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
      <ModalWindow show={showModal} onClose={handleCloseModal}>
        {getModalContent()}
      </ModalWindow>
    </div>
  );
};

export default Home;
