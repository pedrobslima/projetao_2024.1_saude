import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry, faFrown, faSmile } from "@fortawesome/free-solid-svg-icons";
import styles from "./FeelingStatusButton.module.css";

const FeelingStatusButton = ({ status, onClick }) => {
  const getStatusContent = (status) => {
    switch (status) {
      case 1:
        return { text: "Sinto Dores", icon: faSadCry, className: styles.faSadCry };
      case 2:
        return { text: "Me sinto mal", icon: faFrown, className: styles.faFrown };
      case 3:
        return { text: "Estou bem", icon: faSmile, className: styles.faSmile };
      case 4:
        return { text: "Sim, quero ajuda", icon: faSadCry, className: styles.faSadCry };
      case 5:
        return { text: "Não, estou bem", icon: faSmile, className: styles.faSmile };
      default:
        return { text: "indefinido", icon: faSmile, className: "" };
    }
  };

  const { text, icon, className } = getStatusContent(status);

  return (
    <div className={styles.feelingBox}>
      <p>{text}</p>
      <button className={`${styles.feelingButton} ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </button>
    </div>
  );
};

export default FeelingStatusButton;
