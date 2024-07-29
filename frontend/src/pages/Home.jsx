import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

import GoalsBox from "../components/home/GoalsBox";
import FeelingStatus from "../components/home/FeelingStatus";
import BreakTimes from "../components/home/BreakTimes";
import FavoriteMusicalGenres from "../components/home/FavoriteMusicalGenres";
import UnexpectedPain from "../components/home/UnexpectedPain";
import Settings from "../components/home/Settings";
import ModalWindow from "../components/home/ModalWindow";
import ModalPainContent from "../components/home/ModalPainContent";
import ModalNotification from "../components/home/ModalNotification";
import { localContextGetInfo, localContextUpdateInfo } from "../components/context/localContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(null);
  const [showNotification, setShowNotification] = useState();
  const navigate = useNavigate();

  const handleOpenModal = (status) => {
    setCurrentStatus(status);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentStatus(null);
  };

  const toggleShowNotification = () => {
    localContextUpdateInfo("notification", "visible", !showNotification);
    setShowNotification(localContextGetInfo("notification", "visible"));
  };

  const handleNotificationStart = () => {
    toggleShowNotification();
    navigate("/exercicio/pulso/1");
  };

  const handleNotificationClose = () => {
    toggleShowNotification();
  };

  const getModalContent = () => {
    switch (currentStatus) {
      case 1:
      case 4:
        return <ModalPainContent />;
      case 2:
        return (
          <div>
            <h2>Title</h2>
            <p>Placeholder</p>
          </div>
        );
      case 3:
      case 5:
        return (
          <div>
            <p>Que bom! Confira seu cronograma de hoje</p>
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    setShowNotification(localContextGetInfo("notification", "visible"));
  }, []);

  return (
    <div className={styles.home}>
      <div>
        <FeelingStatus onStatusClick={handleOpenModal} />
        <BreakTimes
          title="Pausas para exercícios"
          breaks={[{ time: "9h" }, { time: "11h" }, { time: "14h" }, { time: "16h" }]}
        />
        <BreakTimes title="Pausas para relaxar" breaks={[{ time: "13h" }, { time: "17h" }]} />
        <FavoriteMusicalGenres stylesList={["White Noise", "Lo-fi", "Jazz"]} />
      </div>
      <div>
        <GoalsBox exercisesCompleted={0} totalExercises={4} timeSpent={0} totalTime={10} />
        <Settings />
        <UnexpectedPain onStatusClick={handleOpenModal} />
      </div>
      <ModalWindow show={showModal} onClose={handleCloseModal}>
        {getModalContent()}
      </ModalWindow>
      <ModalNotification
        show={showNotification}
        name="Alongamento"
        time="12h"
        image="https://oxigenioacademia.com.br/wp-content/uploads/2016/12/alongamento-768x510.png"
        onStart={handleNotificationStart}
        onClose={handleNotificationClose}
      />
    </div>
  );
};

export default Home;
