import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000000;
  padding-top: 30px;
  align-items: center;
`;

export const Containerform = styled.View`
  background: red;
  justify-content: center;
`;

//Card

export const ContainerCard = styled.View``;

export const CardBody = styled.View`
  width: 320px;
  height: 400px;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 80px;
`;

export const ImagePoster = styled.Image`
  height: 100%;
  width: 100%;
`;

export const TextCard = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`;
