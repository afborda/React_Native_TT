import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../page/Home";
import Login from "../page/Login";
import Preload from "../page/Preload";
import TabNavigator from "./MainTab";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
