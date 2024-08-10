export const getPageTitle = (pathname) => {
  if (pathname === "/") {
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
  if (paramId == undefined || isNaN(+paramId)) {
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
