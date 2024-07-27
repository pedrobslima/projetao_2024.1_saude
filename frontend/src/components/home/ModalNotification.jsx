import React from "react";
import styles from "./ModalNotification.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/Button/Button";

const ModalNotification = ({ show, onStart, onClose, name="Nome do exercicio", time="10h", image="" }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
            <p>{name}</p>
            <p>{time}</p>
            <FontAwesomeIcon className={styles.icon} icon={faBell}/>
        </div>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={image}></img>
        </div>
        <div className={styles.buttonContainer}>
            <Button onClick={onStart}>Iniciar</Button>
            <Button onClick={onClose} >Mais Tarde</Button>
        </div>
      </div>
    </div>
  );
};
// https://oxigenioacademia.com.br/wp-content/uploads/2016/12/alongamento-768x510.png
export default ModalNotification;