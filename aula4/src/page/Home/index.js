import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  Button,
  View,
  ScrollView,
  Image,
} from "react-native";

import {
  Container,
  Containerform,
  CardBody,
  TextCard,
  ImagePoster,
} from "./styled";
import GetMovies from "../../service/GetData";
import CustomModal from "../../components/CustomModal";
import CustomButton from "../../components/shared/CustomButton";
import GetDetailsMovieID from "../../service/GetDatailsMovie";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});

  console.log(modalVisible);

  const GetMovieData = async (movie, page) => {
    const response = await GetMovies(movie, page);
    console.log(response.data.Search);
    setMovie(response.data.Search);
  };

  const GetMovieDetails = async (idMovie) => {
    setLoading(true);
    const response = await GetDetailsMovieID(idMovie);
    console.log(">>>>>>", response);
    setDetails(response.data);
    setLoading(false);
    setModalVisible(true);
  };

  useEffect(() => {
    GetMovieData("Avengers");
  }, []);

  return (
    <Container>
      <Text>Home aqui!</Text>

      <ScrollView>
        {movie.map((item, index) => {
          return (
            <CardBody key={index}>
              {/* <TextCard>{item.Title}</TextCard> */}
              <ImagePoster source={{ uri: `${item.Poster}` }} />
              <View style={{ width: "100%" }}>
                <CustomButton
                  loading={loading}
                  Text="Saiba Mais"
                  onPress={() => GetMovieDetails(item.imdbID)}
                />
              </View>
            </CardBody>
          );
        })}
      </ScrollView>

      <CustomModal
        open={modalVisible}
        data={details}
        onPress={() => setModalVisible(!modalVisible)}
      />
    </Container>
  );
};

export default Home;
