import React, { useState } from "react";
import styles from "./OptionsContainer.module.css";

const OptionsContainer = ({ options, multi }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (multi) {
      if (option === "Nenhum" || option === "Outro" || option === "Não") {
        // Se "Nenhum", "Outro", ou "Não" for clicado, desmarque todas as outras opções
        setSelectedOptions([option]);
      } else {
        // Se a opção já está selecionada, desmarque-a
        if (selectedOptions.includes(option)) {
          setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
        } else {
          // Caso contrário, adicione a nova opção e desmarque "Nenhum", "Outro", ou "Não" se estiverem selecionados
          setSelectedOptions((prev) =>
            prev
              .filter((selected) => selected !== "Nenhum" && selected !== "Outro" && selected !== "Não")
              .concat(option)
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
          key={option}
          className={`${styles.optionButton} ${selectedOptions.includes(option) ? styles.selected : ""}`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionsContainer;
