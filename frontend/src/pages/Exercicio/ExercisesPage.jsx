import React from 'react'
import './ExercisesPage.css'

import ExerciseCards from '../../components/ExerciseCards';

function Exercicios() {
    return (
        <div className="exercises-page-container">
            <ExerciseCards />
            <ExerciseCards />
        </div>
    );
}

export default Exercicios
