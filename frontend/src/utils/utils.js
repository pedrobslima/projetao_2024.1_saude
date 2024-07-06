export const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/playlist":
      return "Playlist";
    case "/exercicios":
      return "Exercícios";
    default:
      return "";
  }
};
