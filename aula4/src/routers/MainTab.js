import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Home from "../page/Home";
import Sobre from "../page/Sobre";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        options={{ tabBarLabel: "Sobre", headerShown: false }}
        name="TabSobre"
        component={Sobre}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Home", headerShown: false }}
        name="TabHome"
        component={Home}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Sobre2", headerShown: false }}
        name="TabSobre2"
        component={Sobre}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
