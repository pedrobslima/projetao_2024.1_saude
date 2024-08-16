import api from "../main/api";

export const fetchUserArea = async (setSelectedArea) => {
  console.log("FETCH");
  try {
    // Fetching the areas_corpo_exercicios from the backend for user "dvd@cin.ufpe.br"
    const response = await api.get(`/exercicio/user-areas`);
    const areas = response.data.areas_corpo_exercicios;
    console.log(areas);
    if (areas && areas.length > 0) {
      // Select a random area if there are multiple
      const randomArea = areas[Math.floor(Math.random() * areas.length)];
      setSelectedArea(randomArea);
      console.log(randomArea);
    }
  } catch (error) {
    console.error("Error fetching user area:", error);
  }
};

export const updateUserAreas = async (selectedAreas) => {
  // Log para mostrar as areas recebidas
  console.log(selectedAreas);
  try {
    // Fazendo a requisição para atualizar as áreas do corpo
    const response = await api.post(`/form/update-areas`, selectedAreas);

    // Log para mostrar sucesso ou falha
    if (response.status === 200) {
      console.log("Áreas do corpo atualizadas com sucesso:", response.data);
    } else {
      console.error("Erro ao atualizar as áreas do corpo:", response.data);
    }
  } catch (error) {
    console.error("Erro na requisição para atualizar áreas do corpo:", error);
  }
};

export const getPageTitle = (pathname) => {
  if (pathname === "/home") {
    return "Menu Inicial";
  } else if (pathname.startsWith("/musica")) {
    return "Musicoterapia";
  } else if (pathname.startsWith("/exercicio")) {
    return "Exercícios";
  } else {
    return "";
  }
};

export const getParamId = (paramId) => {
  if (paramId === undefined || isNaN(+paramId)) {
    return 0;
  } else {
    return +paramId; // + converte de string para numero.
  }
};

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};

export const changeUrl = (url) => {
  window.location.href = url;
};

export const getExerciseTitle = (area) => {
  switch (area) {
    case "pulso":
      return "Extensão e Flexão dos Punhos com o Cotovelo Estendido";
    case "ombro":
      return "Alongamento de Ombro com Braço Cruzado";
    case "pescoco":
      return "Alongamento, Extensores e Flexores do Pescoço";
    default:
      return "Exercício";
  }
};
