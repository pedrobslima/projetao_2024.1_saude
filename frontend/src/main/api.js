import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-swart-chi.vercel.app/",
});

export default api;
