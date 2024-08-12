import React from "react";
import styles from "./Settings.module.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questionario/1");
  };

  return (
    <div className={styles.settings} onClick={() => handleClick()}>
      <h3>Redefinir configurações</h3>
      <div className={styles.settingsBox}>
        <p>Atualizar Informações sobre você</p>
        <FontAwesomeIcon icon={faPencil} />
      </div>
    </div>
  );
};

export default Settings;
