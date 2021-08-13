import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Home from "../page/Home";
import Sobre from "../page/Sobre";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({}) => {
          let imgSource = null;

          switch (route.name) {
            case "TabHome":
              imgSource = require("../assets/home.png");
              break;
            case "TabSobre":
              imgSource = require("../assets/sobre.png");
              break;
            case "TabSobre2":
              imgSource = require("../assets/sobre.png");
              break;
          }

          return <Image source={imgSource} style={{ width: 24, height: 24 }} />;
        },
      })}
    >
      <Tab.Screen
        options={{ tabBarLabel: "Home", headerShown: false }}
        name="TabHome"
        component={Home}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Sobre", headerShown: false }}
        name="TabSobre"
        component={Sobre}
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
