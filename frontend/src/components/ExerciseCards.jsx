import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExerciseCards.css';

function ExerciseCards() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`./guias/${id}`);
  };

  return (
    <div className="exercise-cards-container">
      <h1>Exercícios Para Você</h1>
      <div className="cards">
        <div className="card" onClick={() => handleCardClick('pulso')}>
          <div className="card-image"></div>
          <p>Pulso</p>
        </div>
        <div className="card" onClick={() => handleCardClick('articulacoes')}>
          <div className="card-image"></div>
          <p>Articulações</p>
        </div>
        <div className="card" onClick={() => handleCardClick('antiEstresse')}>
          <div className="card-image"></div>
          <p>Anti-estresse</p>
        </div>
      </div>
    </div>
  );
}

export default ExerciseCards;
