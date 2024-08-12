import React from "react";
import { useParams } from "react-router-dom";

import FormContent from "../../components/form/FormContent";

const Questionario = () => {
  const { step } = useParams();

  // Definindo as perguntas para cada step
  const perguntasStep1 = [
    {
      question: "Qual seu Horário de Trabalho?",
      options: ["Matutino", "Vespertino", "Noturno", "Integral"],
      multi: false,
    },
    {
      question: "Selecione os Locais que sente dor ou desconforto",
      options: ["Punho", "Lombar", "Pescoço", "Pés", "Nenhum"],
      multi: true,
    },
    {
      question: "Qual a intensidade dessa dor?",
      options: ["PunDor Suave", "Dor Moderada", "Dor Forte", "Dor Muito Forte", "Dor Máxima"],
      multi: false,
    },
    {
      question: "O que você normalmente sente durante o trabalho?",
      options: ["Desconforto", "Fadiga", "Formigamento", "Dormencia", "Fraqueza"],
      multi: true,
    },
  ];

  const perguntasStep2 = [
    {
      question: "O que você faz nas suas pausas?",
      options: ["Me exercito", "Uso a Internet", "Cochilo", "Falo com colegas", "Outra coisa"],
      multi: true,
    },
    {
      question: "Quais desses fazem parte da sua rotina de trabalho?",
      options: ["Digitar", "Carregar pesos", "Analisar Planilhas", "Locomoção frequente", "Outro"],
      multi: true,
    },
    {
      question: "Durante o trabalho, você sente algum desses com frequência?",
      options: ["Estresse", "Desânimo", "Frustração", "Cansaço", "Não"],
      multi: true,
    },
    {
      question: "Recentemente buscou ajuda médica por alguma dessas causas?",
      options: ["Dores físicas", "Emocional", "Físico e Mental", "Nenhuma"],
      multi: false,
    },
  ];

  // Seleciona as perguntas baseadas no step atual
  const questions = step === "1" ? perguntasStep1 : step === "2" ? perguntasStep2 : [];

  return (
    <div>
      <FormContent step={step} questions={questions} />
    </div>
  );
};

export default Questionario;
