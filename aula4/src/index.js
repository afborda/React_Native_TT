import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Container } from "./styled";
import StackNavigator from "./routers/MainStack";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
