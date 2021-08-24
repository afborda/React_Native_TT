import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-self: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Botao = styled.TouchableOpacity``;

export const TextBody = styled.View`
  background: red;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  margin: 5px;
`;

export const BoxBody = styled.View`
  width: 80%;
  height: 90%;
  background: #171717;
  border-radius: 8px;
  padding: 5px;
`;

export const ImagePoster = styled.Image`
  height: 400px;
  width: 100%;
  z-index: -1;
  margin-bottom: 10px;
`;

export const TitleModal = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const TitleMin = styled.Text`
  color: #fff;
  font-size: 13px;
`;

export const ContainerText = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 0 10px;
`;

export const DataMovie = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DataMovieText = styled.View`
  max-width: 50%;
`;
