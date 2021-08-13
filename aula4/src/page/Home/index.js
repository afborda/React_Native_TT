import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import { Container, Containerform } from "./styled";
import { useRoute } from "@react-navigation/core";
import GetMovies from "../../service/GetData";

const Home = () => {
  const [movie, setMovie] = useState([]);

  const GetMovieData = async (movie, page) => {
    const response = GetMovies(movie, page);
    console.log(">>>>", response);
    setMovie(response);
  };

  useEffect(() => {
    GetMovieData("Avengers");
  }, []);

  return (
    <Container>
      <Text>Home aqui!</Text>
    </Container>
  );
};

export default Home;
