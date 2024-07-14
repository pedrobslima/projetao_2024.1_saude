import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry, faFrown, faSmile } from "@fortawesome/free-solid-svg-icons";
import styles from "./FeelingStatusButton.module.css";

const FeelingStatusButton = ({ status, onClick }) => {
  const getStatusContent = (status) => {
    switch (status) {
      case 1:
        return { text: "Sinto Dores", icon: faSadCry };
      case 2:
        return { text: "Me sinto mal", icon: faFrown };
      case 3:
        return { text: "Estou bem", icon: faSmile };
      case 4:
        return { text: "Sim, quero ajuda", icon: faSadCry };
      case 5:
        return { text: "Não, estou bem", icon: faSmile };
      default:
        return { text: "indefinido", icon: faSmile };
    }
  };

  const { text, icon } = getStatusContent(status);

  return (
    <div className={styles.feelingBox}>
      <p>{text}</p>
      <button className={styles.feelingButton} onClick={onClick}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </button>
    </div>
  );
};

export default FeelingStatusButton;
