import api from "../main/api";

export const fetchUserArea = async (setSelectedArea) => {
  console.log("FETCH");
  try {
    // Requsição
    const response = await api.get(`/exercicio/user-areas`);
    const areas = response.data.data; //.areas_corpo_exercicios;
    console.log(areas);
    let area = areas[0];
    if (areas && areas.length > 0) {
      // escolhe uma área aleatória se tiver multiplas
      area = areas[Math.floor(Math.random() * areas.length)];
    }
    console.log(area);
    setSelectedArea(area);
  } catch (error) {
    console.error("Error fetching user area:", error);
  }
};

export const updateUserAreas = async (selectedAreas) => {
  // Verificar se 'selectedAreas' contém apenas 'Nenhum'
  if (selectedAreas.length === 1 && selectedAreas[0] === "Nenhum") {
    // Substituir por ['ombro', 'pescoço', 'punho']
    selectedAreas = ["ombro", "pescoco", "punho"];
  }

  // Log para mostrar as áreas recebidas
  console.log(selectedAreas);

  // Corrigindo a formatação dos dados
  const formattedAreas = selectedAreas.map(
    (item) =>
      item
        .toLowerCase() // Converte todas as letras para minúsculas
        .replace(/ç/g, "c") // Substitui 'ç' por 'c'
  );

  try {
    // Requisição enviando o objeto correto
    const response = await api.post(`/form/update-areas`, {
      selectedAreas: formattedAreas, // Enviar como objeto
    });

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
  } else if (pathname.startsWith("/musica/")) {
    return "Musicoterapia";
  } else if (pathname.startsWith("/musica")) {
    return "Playlists";
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
