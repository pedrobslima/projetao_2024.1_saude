import React from "react";
import styles from "./FormQuestions.module.css";

import OptionsContainer from "./OptionsContainer";

const FormQuestions = ({ questions }) => {
  return (
    <div className={styles.formQuestionsContainer}>
      {questions.map((questionObj, index) => (
        <div key={index} className={styles.questionBlock}>
          <h3 className={styles.questionText}>{questionObj.question}</h3>
          <OptionsContainer options={questionObj.options} multi={questionObj.multi} apiCall={questionObj.apiCall} />
        </div>
      ))}
    </div>
  );
};

export default FormQuestions;
