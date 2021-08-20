import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  background-color: #171717;
`;

export const BotaoTab = styled.TouchableHighlight`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const MiddleTab = styled.TouchableHighlight`
  width: 70px;
  height: 70px;
  background-color: #e50914;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  margin-top: -20px;
`;

export const TextCustom = styled.Text`
  color: ${({ colorText }) => (colorText ? "#e50914" : "#fff")};
`;
