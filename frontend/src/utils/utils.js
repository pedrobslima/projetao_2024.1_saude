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
