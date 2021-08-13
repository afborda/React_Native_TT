import { api } from "../../config";

const GetMovies = async (name, page) => {
  try {
    const response = await api.get(`/?apikey=fa70f7a7&s=${name}&page=${page}`);

    return response;
  } catch (error) {
    alert(error);
  }
};

export default GetMovies;
