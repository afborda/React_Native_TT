import { api } from "../../config";

const GetDetailsMovieID = async (idMovie) => {
  try {
    const response = await api.get(`/?apikey=fa70f7a7&i=${idMovie}`);

    return response;
  } catch (error) {
    alert(error);
  }
};

export default GetDetailsMovieID;
