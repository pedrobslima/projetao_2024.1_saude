import React from "react";
import styles from "./Settings.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <h3>Redefinir configurações</h3>
      <button>
        Atualizar Informações sobre você
        <FontAwesomeIcon icon={faPencil} />
      </button>
    </div>
  );
};

export default Settings;
