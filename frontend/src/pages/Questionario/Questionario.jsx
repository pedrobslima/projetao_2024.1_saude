import React from "react";
import { useParams } from "react-router-dom";

import FormContent from "../../components/form/FormContent";
import {
  pulso,
  pescoco,
  ombro,
  smile,
  digitar,
  locomocao_frequente,
  carregar_pesos,
  analisar_planilhas,
} from "../../assets/images";

const Questionario = () => {
  const { step } = useParams();

  // Definindo as perguntas para cada step
  const perguntasStep1 = [
    {
      question: "Qual seu Horário de Trabalho?",
      options: [{ text: "Matutino" }, { text: "Vespertino" }, { text: "Noturno" }, { text: "Integral" }],
      multi: false,
    },
    {
      question: "Selecione os Locais que sente dor ou desconforto",
      options: [
        { text: "Punho", imgSrc: pulso },
        { text: "Lombar", imgSrc: pescoco },
        { text: "Pescoço", imgSrc: ombro },
        { text: "Nenhum", imgSrc: smile },
      ],
      multi: true,
    },
    {
      question: "Qual a intensidade dessa dor?",
      options: [
        { text: "Dor Suave" },
        { text: "Dor Moderada" },
        { text: "Dor Forte" },
        { text: "Dor Muito Forte" },
        { text: "Dor Máxima" },
      ],
      multi: false,
    },
    {
      question: "O que você normalmente sente durante o trabalho?",
      options: [
        { text: "Desconforto" },
        { text: "Fadiga" },
        { text: "Formigamento" },
        { text: "Dormencia" },
        { text: "Fraqueza" },
      ],
      multi: true,
    },
  ];

  const perguntasStep2 = [
    {
      question: "O que você faz nas suas pausas?",
      options: [
        { text: "Me exercito" },
        { text: "Uso a Internet" },
        { text: "Cochilo" },
        { text: "Falo com colegas" },
        { text: "Outra coisa" },
      ],
      multi: true,
    },
    {
      question: "Quais desses fazem parte da sua rotina de trabalho?",
      options: [
        { text: "Digitar", imgSrc: digitar },
        { text: "Carregar pesos", imgSrc: carregar_pesos },
        { text: "Analisar Planilhas", imgSrc: analisar_planilhas },
        { text: "Locomoção frequente", imgSrc: locomocao_frequente },
        { text: "Outro" },
      ],
      multi: true,
    },
    {
      question: "Durante o trabalho, você sente algum desses com frequência?",
      options: [
        { text: "Estresse" },
        { text: "Desânimo" },
        { text: "Frustração" },
        { text: "Cansaço" },
        { text: "Não" },
      ],
      multi: true,
    },
    {
      question: "Recentemente buscou ajuda médica por alguma dessas causas?",
      options: [{ text: "Dores físicas" }, { text: "Emocional" }, { text: "Físico e Mental" }, { text: "Nenhuma" }],
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
