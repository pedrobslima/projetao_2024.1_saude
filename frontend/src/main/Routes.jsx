import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Musicoterapia from '../pages/Musicoterapia'
import Exercicios from '../pages/Exercicio/ExercisesPage'
import ExerciseGuidePage from '../pages/Exercicio/ExerciseGuidePage'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/musicoterapia' element={<Musicoterapia />} />
            <Route path='/exercicios' element={<Exercicios />} />
            <Route path='/exercicios/guias/:id' element={<ExerciseGuidePage />} />
        </Routes>
    );
}

export default AppRoutes