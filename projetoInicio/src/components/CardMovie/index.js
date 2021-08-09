import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const CardMovie = ({ data }) => {
  return (
    <View>
      <Image style={styles.poster} source={{ uri: data.Poster }} />
      <Text>{data.Title}</Text>
    </View>
  );
};

export default CardMovie;

const styles = StyleSheet.create({
  poster: {
    height: 300,
    width: 250,
  },
});
