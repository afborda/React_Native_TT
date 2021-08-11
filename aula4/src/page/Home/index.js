import React, { useState } from "react";
import { Text } from "react-native";

import { Container, Containerform } from "./styled";
import { useRoute } from "@react-navigation/core";

const Home = () => {
  // const route = useRoute();

  // const { email, senha } = route.params ?? "";

  return (
    <Container>
      <Text>Home aqui!</Text>
      {/* <Text>{email}</Text>
      <Text>{senha}</Text> */}
    </Container>
  );
};

export default Home;
