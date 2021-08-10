import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../page/Home";
import Login from "../page/Login";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
