export const getPageTitle = (pathname) => {
  if (pathname === "/") {
    return "Home";
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
    return 0
  }
  else {
    return +paramId // + converte de string para numero.
  }
}

export const changeUrl = (url) => {
  window.location.href = url
}
