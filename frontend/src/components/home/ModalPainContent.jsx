import React, { useState } from "react";
import styles from "./ModalPainContent.module.css";

import ModalLetsMakeItBetter from "./ModalLetsMakeItBetter";

import pulso from "../../assets/images/pulso.png";
import pescoco from "../../assets/images/pescoco.png";
import ombro from "../../assets/images/ombro.png";

const ModalPainContent = () => {
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState("");

  const handleButtonClick = (area) => {
    setSelectedArea(area);
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
              <button className={styles.areaButton} onClick={() => handleButtonClick("pulso")}>
                <img src={pulso} alt="pulso" className={styles.icon} />
              </button>
            </div>
            <div>
              <p>Pescoço</p>
              <button className={styles.areaButton} onClick={() => handleButtonClick("pescoco")}>
                <img src={pescoco} alt="pescoço" className={styles.icon} />
              </button>
            </div>
            <div>
              <p>Ombro</p>
              <button className={styles.areaButton} onClick={() => handleButtonClick("ombro")}>
                <img src={ombro} alt="ombro" className={styles.icon} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ModalLetsMakeItBetter selectedArea={selectedArea} />
      )}
    </div>
  );
};

export default ModalPainContent;
