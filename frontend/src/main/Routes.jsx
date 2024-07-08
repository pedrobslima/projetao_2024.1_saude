import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Playlist from '../pages/Playlist'
import Exercicios from '../pages/Exercicio/ExercisesPage'
import ExerciseGuidePage from '../pages/Exercicio/ExerciseGuidePage'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/playlist' element={<Playlist />} />
            <Route path='/exercicios' element={<Exercicios />} />
            <Route path='/exercicios/guias/:id' element={<ExerciseGuidePage />} />
        </Routes>
    );
}

export default AppRoutes