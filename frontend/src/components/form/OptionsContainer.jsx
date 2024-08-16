import React, { useState } from "react";
import styles from "./OptionsContainer.module.css";

const OptionsContainer = ({ options, multi, apiCall }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    let updatedSelectedOptions;

    if (multi) {
      if (["Nenhum", "Outro", "Não"].includes(option.text)) {
        updatedSelectedOptions = [option];
      } else {
        if (selectedOptions.some((selected) => selected.text === option.text)) {
          updatedSelectedOptions = selectedOptions.filter((selected) => selected.text !== option.text);
        } else {
          updatedSelectedOptions = [
            ...selectedOptions.filter((selected) => !["Nenhum", "Outro", "Não"].includes(selected.text)),
            option,
          ];
        }
      }
    } else {
      updatedSelectedOptions = [option];
    }

    setSelectedOptions(updatedSelectedOptions);

    if (apiCall) {
      apiCall(updatedSelectedOptions.map((opt) => opt.text));
    }
  };

  return (
    <div className={styles.optionsContainer}>
      {options.map((option) => (
        <button
          key={option.text}
          className={`${styles.optionButton} ${
            selectedOptions.some((selected) => selected.text === option.text) ? styles.selected : ""
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option.text}
          {option.imgSrc && <img src={option.imgSrc} alt={option.text} className={styles.optionImage} />}
        </button>
      ))}
    </div>
  );
};

export default OptionsContainer;
