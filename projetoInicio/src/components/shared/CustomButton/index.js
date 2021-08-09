import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

// import { Container } from './styles';

const CustomButton = ({
  text,
  loading = false,
  onPress,
  disable,
  color,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disable}
        style={styles.button}
        {...props}
      >
        <Text style={styles.text}>
          {loading ? <ActivityIndicator size="large" color="#fff" /> : text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginVertical: 20,
    backgroundColor: "#2AA",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "80%",
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
