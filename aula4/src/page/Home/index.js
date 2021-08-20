import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Button } from "react-native";

import { Container, Containerform } from "./styled";
import { useRoute } from "@react-navigation/core";
import GetMovies from "../../service/GetData";
import CustomModal from "../../components/CustomModal";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  console.log(modalVisible);

  const GetMovieData = async (movie, page) => {
    const response = await GetMovies(movie, page);
    setMovie(response);
  };

  useEffect(() => {
    GetMovieData("Avengers");
  }, []);

  return (
    <Container>
      <Text>Home aqui!</Text>
      <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />

      <CustomModal
        open={modalVisible}
        onPress={() => setModalVisible(!modalVisible)}
      />
    </Container>
  );
};

export default Home;
