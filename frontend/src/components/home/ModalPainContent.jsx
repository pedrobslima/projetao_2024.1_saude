import React from "react";
import styles from "./ModalPainContent.module.css";

import pulso from "../../assets/images/pulso.png";
import lombar from "../../assets/images/lombar.png";
import perna from "../../assets/images/perna.png";
import pescoco from "../../assets/images/pescoco.png";

const ModalPainContent = () => {
  return (
    <div>
      <h2>Onde?</h2>
      <div className={styles.buttons}>
        <div>
          <p>Pulso</p>
          <button className={styles.areaButton}>
            <img src={pulso} alt="pulso" className={styles.icon} />
          </button>
        </div>
        <div>
          <p>Lombar</p>
          <button className={styles.areaButton}>
            <img src={lombar} alt="lombar" className={styles.icon} />
          </button>
        </div>
        <div>
          <p>Perna</p>
          <button className={styles.areaButton}>
            <img src={perna} alt="perna" className={styles.icon} />
          </button>
        </div>
        <div>
          <p>Pescoço</p>
          <button className={styles.areaButton}>
            <img src={pescoco} alt="pescoço" className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPainContent;
