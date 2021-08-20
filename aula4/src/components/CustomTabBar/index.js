import React from "react";
import { Image, Text, View } from "react-native";

import { Container, BotaoTab, MiddleTab, TextCustom } from "./styled";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        let label = route.name;

        if (options.tabBarLabel != undefined) {
          label = options.tabBarLabel;
        } else if (options.title != undefined) {
          label = options.title;
        }

        let imgSource = null;

        switch (route.name) {
          case "TabHome":
            imgSource = require("../../assets/movie.png");
            break;
          case "TabSobre":
            imgSource = require("../../assets/about.png");
            break;
          case "TabSobre2":
            imgSource = require("../../assets/config.png");
            break;
        }

        const handleTabPress = () => {
          navigation.navigate(route.name);
        };

        if (route.name === "TabHome") {
          return (
            <MiddleTab
              key={index}
              underlayColor="none"
              onPress={handleTabPress}
            >
              <>
                <Image source={imgSource} style={{ width: 35, height: 35 }} />
              </>
            </MiddleTab>
          );
        } else {
          return (
            <BotaoTab underlayColor="none" onPress={handleTabPress} key={index}>
              <>
                <Image source={imgSource} style={{ width: 24, height: 24 }} />
                <TextCustom colorText={isFocused}>{label}</TextCustom>
              </>
            </BotaoTab>
          );
        }
      })}
    </Container>
  );
};

export default CustomTabBar;
