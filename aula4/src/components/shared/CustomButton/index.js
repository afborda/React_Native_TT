import React from "react";
import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";

import { Button, TextButton } from "./styled";

const CustomButton = ({
  Text,
  loading = false,
  onPress,
  disabled,
  ...props
}) => {
  return (
    <Button onPress={onPress} disabled={disabled} {...props}>
      <TextButton>
        {loading ? <ActivityIndicator size="large" color="#fff" /> : Text}
      </TextButton>
    </Button>
  );
};

export default CustomButton;
