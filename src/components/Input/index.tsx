import React, { FC } from "react";
import styled from "@emotion/native";
import { View } from "react-native";

const InputStyle = styled.TextInput`
  height: 40px;
  width: 200px;
  padding: 0px 5px;
  border: 2px solid #424242;
  color: #fff;
`;

const Error = styled.Text`
  margin-top: 10px;
  text-align: center;
  color: #ff4e45;
`;

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
}

const Input: FC<Props> = ({ placeholder, value, onChangeText, error }) => (
  <View>
    <InputStyle
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      testID="player-name-input"
    />
    {error ? <Error>Player não encontrado</Error> : null}
  </View>
);

export default Input;
