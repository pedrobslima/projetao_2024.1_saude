import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Musicoterapia from "../pages/Musica/Musicoterapia";
import ExerciseVideoPage from "../pages/Exercicio/ExerciseVideoPage";
import ExerciseComplete from "../pages/Exercicio/ExerciseCompletePage";
import Questionario from "../pages/Questionario/Questionario";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/questionario/:step" element={<Questionario />} />
      <Route path="/musica" element={<Musicoterapia />} />
      <Route path="/musica/:playlistId" element={<Musicoterapia />} />
      <Route path="/musica/:playlistId/:musicaId" element={<Musicoterapia />} />
      <Route path="/exercicio/:area/:id" element={<ExerciseVideoPage />} />
      <Route path="/exercicio/:area/:id/completo" element={<ExerciseComplete />} />
      <Route path="*" element={<Navigate to="/questionario/1" replace />} />
    </Routes>
  );
}

export default AppRoutes;
