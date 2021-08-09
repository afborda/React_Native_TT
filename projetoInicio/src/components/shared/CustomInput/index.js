import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

// import { Container } from './styles';

const CustomInput = ({
  id,
  setValue,
  label,
  placeholder,
  secureTextEntry,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        id={id}
        onChangeText={(e) => setValue(e)}
        secureTextEntry={secureTextEntry}
        {...props}
        style={styles.input}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    backgroundColor: "#ccc",
    height: 40,
    borderRadius: 8,
    padding: 10,
  },
});
