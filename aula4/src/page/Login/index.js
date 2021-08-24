import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import CustomButton from "../../components/shared/CustomButton";
import CustomInput from "../../components/shared/CustomInput";
import { useNavigation } from "@react-navigation/native";

import { Container, Containerform } from "./styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    const data = {
      email,
      senha,
    };

    navigation.reset({ routes: [{ name: "Tab" }] });
  };
  return (
    <Container>
      <Containerform>
        <CustomInput
          id="email"
          placeholder="Informe seu Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          id="senha"
          placeholder="Informe sua Senha"
          value={senha}
          setValue={setSenha}
        />
        <CustomButton Text="Entrar" onPress={handleSubmit} />
      </Containerform>
    </Container>
  );
};

export default Login;
