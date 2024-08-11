import React from "react";
import styles from "./FormCompleteButton.module.css";

import { useNavigate } from "react-router-dom";

const FormCompleteButton = ({ step }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (step === "1") navigate("/questionario/2");
    else navigate("/");
  };

  const getButtonText = () => {
    if (step === "1") return "Avançar";
    else return "Tudo Pronto";
  };

  return (
    <div className={styles.ButtonContainer}>
      <button className={styles.FormCompleteButton} onClick={() => handleClick()}>
        {getButtonText()}
      </button>
    </div>
  );
};

export default FormCompleteButton;
