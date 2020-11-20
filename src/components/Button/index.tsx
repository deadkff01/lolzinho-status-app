import React, { FC } from "react";
import { GestureResponderEvent } from "react-native";
import styled from "@emotion/native";

const ButtonStyle = styled.TouchableOpacity`
  background-color: #33a2ff;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  margin: 20px;
  width: 150px;
`;

const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

interface Props {
  onPress: (event: GestureResponderEvent) => void;
}

export const Button: FC<Props> = ({ onPress }) => (
  <ButtonStyle onPress={onPress}>
    <ButtonText>Pesquisar</ButtonText>
  </ButtonStyle>
);

export default Button;
