import React from "react";
import { Modal, View, Text } from "react-native";

import {
  Container,
  Box,
  Botao,
  TextBody,
  BoxBody,
  ImagePoster,
  TitleModal,
  ContainerText,
  TitleMin,
  DataMovie,
  DataMovieText,
} from "./styled";

const CustomModal = ({ open, onPress, data }) => {
  // Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson"
  // Awards: "Nominated for 1 Oscar. 38 wins & 80 nominations total"
  // BoxOffice: "$623,357,910"
  // Country: "United States"
  // DVD: "22 Nov 2015"
  // Director: "Joss Whedon"
  // Genre: "Action, Adventure, Sci-Fi"
  // Language: "English, Russian, Hindi"
  // Metascore: "69"
  // Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
  // Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  // Production: "Marvel Studios"
  // Rated: "PG-13"
  // Released: "04 May 2012"
  // Response: "True"
  // Runtime: "143 min"
  // Title: "The Avengers"
  // Type: "movie"
  // Website: "N/A"
  // Writer: "Joss Whedon, Zak Penn"
  // Year: "2012"
  // imdbID: "tt0848228"
  // imdbRating: "8.0"
  // imdbVotes: "1,301,863"

  return (
    <Container>
      <Modal
        visible={open}
        animationType="slide"
        transparent={true}
        onRequestClose={onPress}
      >
        <Box>
          <BoxBody>
            <Botao onPress={onPress}>
              <TextBody></TextBody>

              <ImagePoster source={{ uri: `${data.Poster}` }} />

              <ContainerText>
                <TitleModal> Titulo: {data.Title}</TitleModal>
                <TitleModal> Ano: {data.Year}</TitleModal>
              </ContainerText>

              <DataMovie>
                <DataMovieText>
                  <TitleMin> Produção: {data.Production}</TitleMin>
                  <TitleMin> Tempo de Filme: {data.Runtime}</TitleMin>
                  <TitleMin> Nota: {data.imdbRating}</TitleMin>
                  <TitleMin> Author: {data.Writer}</TitleMin>
                  <TitleMin> Diretor: {data.Director}</TitleMin>
                </DataMovieText>
                <DataMovieText>
                  <TitleMin> Tempo de Filme: {data.Plot}</TitleMin>
                </DataMovieText>
              </DataMovie>
            </Botao>
          </BoxBody>
        </Box>
      </Modal>
    </Container>
  );
};

export default CustomModal;
