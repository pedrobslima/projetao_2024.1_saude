import React from "react";
import styles from "./ModalLetsMakeItBetter.module.css";
import { useNavigate } from "react-router-dom";

const ModalLetsMakeItBetter = ({ selectedArea }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/exercicio/${selectedArea}/1`);
  };

  return (
    <div className={styles.modalLetsMakeItBetter}>
      <h2>Vamos melhorar isso!</h2>
      <button className={styles.confirmButton} onClick={handleClick}>
        Confirmar
      </button>
    </div>
  );
};

export default ModalLetsMakeItBetter;
