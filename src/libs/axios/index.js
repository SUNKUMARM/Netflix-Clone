import axios from "axios";

const server = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default server;
