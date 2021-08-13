import React from "react";
import { TextInput, View } from "react-native";

import { Input, Container } from "./styled";

const CustomInput = ({
  id,
  setValue,
  placeholder,
  secureTextEntry,
  ...props
}) => {
  return (
    <Container>
      <Input
        id={id}
        onChangeText={(e) => setValue(e)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </Container>
  );
};

export default CustomInput;
