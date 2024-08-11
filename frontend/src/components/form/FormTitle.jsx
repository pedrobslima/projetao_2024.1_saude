import React from "react";
import styles from "./FormTitle.module.css";

const FormTitle = ({ name }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        Bem-vinda, <span className={styles.name}>{name}</span>!
      </h1>
      <p className={styles.subtitle}>Nos conte um pouco sobre você</p>
      <p className={styles.description}>
        Esse é um formulário para entendermos melhor seu perfil <br />e personalizarmos o Labori perfeito para seu uso.
      </p>
    </div>
  );
};

export default FormTitle;
