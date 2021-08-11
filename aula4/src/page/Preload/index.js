import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

import { Container, TextPreload } from "./styled";

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <Container>
      <TextPreload> Preload ta on!! </TextPreload>
    </Container>
  );
};

export default Preload;
