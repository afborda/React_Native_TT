import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import CardMovie from "../../components/CardMovie";
import CustomButton from "../../components/shared/CustomButton";
import CustomInput from "../../components/shared/CustomInput";
import { Search } from "../../mock/movie";
import GetMovies from "../../service/Movie/GetMovies";

const Home = () => {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataMovies, setDataMovies] = useState([]);

  const GetMoviesData = async (movie) => {
    setLoading(true);
    const response = await GetMovies(movie);
    setDataMovies(response.data.Search);
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <View>
        <CustomInput
          placeholder="Busca Filmes"
          id="movie"
          value={movie}
          setValue={setMovie}
        />
        <CustomButton
          onPress={() => GetMoviesData(movie)}
          text="Buscar filmes"
          loading={loading}
        />

        {/* <ScrollView
          contentContainerStyle={{
            backgroundColor: "#ccc",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Search.map((item) => {
            return (
              <View key={item.imdbID}>
                <Image style={styles.poster} source={{ uri: item.Poster }} />
                <Text>{item.Title}</Text>
                <Text>{item.Type}</Text>
                <Text>{item.Year}</Text>
              </View>
            );
          })}
        </ScrollView> */}

        <FlatList
          data={dataMovies}
          renderItem={({ item }) => <CardMovie data={item} />}
          keyExtractor={(item) => item.imdbID}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  poster: {
    width: 250,
    height: 300,
  },
});
