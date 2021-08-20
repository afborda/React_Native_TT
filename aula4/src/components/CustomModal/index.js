import React from "react";
import { Modal, View } from "react-native";

import { Container, Box, Botao, TextBody, BoxBody } from "./styled";

const CustomModal = ({ open, onPress }) => {
  console.log("open>>", open);
  return (
    <Container>
      <Modal
        visible={open}
        animationType="none"
        transparent={true}
        onRequestClose={onPress}
      >
        <Box>
          <BoxBody>
            <Botao onPress={onPress}>
              <TextBody>Fechar Modal</TextBody>
            </Botao>
          </BoxBody>
        </Box>
      </Modal>
    </Container>
  );
};

export default CustomModal;
