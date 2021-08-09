import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import Home from "./page/Home";

// import { Container } from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform === "ios" ? 0 : 25,
    backgroundColor: "red",
  },
});
