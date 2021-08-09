import axios from "axios";

export const apiExternal = axios.create({
  baseURL: "https://www.omdbapi.com",
});
