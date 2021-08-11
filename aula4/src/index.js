import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Container } from "./styled";
import StackNavigator from "./routers/MainStack";
import TabNavigator from "./routers/MainTab";

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
