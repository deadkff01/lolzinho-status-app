import React, { FC } from "react";
import styled from "@emotion/native";
import { Modal, ActivityIndicator } from "react-native";

const ModalStyle = styled.Modal`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(000, 000, 000, 0.8);
  z-index: 100;
  border: none;
  text-align: center;
  justify-content: center;
`;

const IndicatorStyle = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

interface Props {
  visible: boolean;
}

export const CustomModal: FC<Props> = ({ visible }) =>
  visible ? (
    <ModalStyle
      animationType={"fade"}
      visible={visible}
      onRequestClose={() => {
        console.log("close modal");
      }}
    >
      <IndicatorStyle>
        <ActivityIndicator size={50} animating={true} />
      </IndicatorStyle>
    </ModalStyle>
  ) : null;

export default CustomModal;
