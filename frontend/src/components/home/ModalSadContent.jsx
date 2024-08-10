import React from "react";
import styles from "./ModalSadContent.module.css";
import Button from "../shared/Button/Button";
import { useNavigate } from "react-router-dom";

const ModalSadContent = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/musica");
  };

  return (
    <div>
      <h2>Gostaria de um momento de relaxamento?</h2>
      <div className={styles.buttonContainer}>
        <Button color="#7C8ECD" hover_color="#576492" onClick={handleNavigate}>
          Sim
        </Button>
        <Button color="#D7D7D7" hover_color="#858E92" onClick={onClose}>
          Não
        </Button>
      </div>
    </div>
  );
};

export default ModalSadContent;
