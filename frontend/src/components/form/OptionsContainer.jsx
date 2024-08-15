import React, { useState } from "react";
import styles from "./OptionsContainer.module.css";

const OptionsContainer = ({ options, multi }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (multi) {
      if (["Nenhum", "Outro", "Não"].includes(option.text)) {
        setSelectedOptions([option]);
      } else {
        if (selectedOptions.some((selected) => selected.text === option.text)) {
          setSelectedOptions(selectedOptions.filter((selected) => selected.text !== option.text));
        } else {
          setSelectedOptions((prev) =>
            prev.filter((selected) => !["Nenhum", "Outro", "Não"].includes(selected.text)).concat(option)
          );
        }
      }
    } else {
      setSelectedOptions([option]);
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
