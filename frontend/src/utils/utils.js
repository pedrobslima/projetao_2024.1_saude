export const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/musicoterapia":
      return "Musicoterapia";
    case "/exercicios":
      return "Exercícios";
    default:
      return "";
  }
};
