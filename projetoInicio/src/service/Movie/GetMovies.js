import { apiExternal } from "../../config";

const GetMovies = async (name, page) => {
  try {
    const response = await apiExternal.get(
      `/?apikey=fa70f7a7&s=${name}&page=${page}`
    );

    return response;
  } catch (error) {
    alert(error);
  }
};

export default GetMovies;
