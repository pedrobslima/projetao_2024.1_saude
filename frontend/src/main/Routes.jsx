import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Playlist from '../pages/Playlist'
import ExerciseVideoPage from '../pages/Exercicio/ExerciseVideoPage'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/musica' element={<Playlist />} />
            <Route path='/exercicio/:area/:id' element={<ExerciseVideoPage />} />
        </Routes>
    );
}

export default AppRoutes