import React, { useState } from "react";
import styles from "./ModalPainContent.module.css";

import ModalLetsMakeItBetter from "./ModalLetsMakeItBetter";
import pulso from "../../assets/images/pulso.png";
import lombar from "../../assets/images/lombar.png";
import perna from "../../assets/images/perna.png";
import pescoco from "../../assets/images/pescoco.png";

const ModalPainContent = () => {
  const [step, setStep] = useState(1);

  const handleButtonClick = () => {
    setStep(2);
  };

  return (
    <div>
      {step === 1 ? (
        <div>
          <h2>Onde você está sentindo dores?</h2>
          <div className={styles.buttons}>
            <div>
              <p>Pulso</p>
              <button className={styles.areaButton} onClick={handleButtonClick}>
                <img src={pulso} alt="pulso" className={styles.icon} />
              </button>
            </div>
            <div>
              <p>Lombar</p>
              <button className={styles.areaButton} onClick={handleButtonClick}>
                <img src={lombar} alt="lombar" className={styles.icon} />
              </button>
            </div>
            <div>
              <p>Perna</p>
              <button className={styles.areaButton} onClick={handleButtonClick}>
                <img src={perna} alt="perna" className={styles.icon} />
              </button>
            </div>
            <div>
              <p>Pescoço</p>
              <button className={styles.areaButton} onClick={handleButtonClick}>
                <img src={pescoco} alt="pescoço" className={styles.icon} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ModalLetsMakeItBetter />
      )}
    </div>
  );
};

export default ModalPainContent;
