import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Playlist from '../pages/Playlist'
import Exercicios from '../pages/Exercicios'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/playlist' element={<Playlist />} />
            <Route path='/exercicios' element={<Exercicios />} />
        </Routes>
    );
}

export default AppRoutes