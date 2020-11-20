import React, { useState } from "react";
import Input from "../../components/Input";
import Container from "../../components/Container";
import Button from "../../components/Button";
import CustomModal from "../../components/CustomModal";
import CustomView, { CustomText } from "../../components/CustomView";
import { getPlayerByName } from "../../api/baseService";

export default function Main() {
  const [playerName, setPlayerName] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [playerData, setPlayerData] = useState<any>({});

  const searchPlayer = async () => {
    setShowModal(true);
    setError(false);
    try {
      const { data } = await getPlayerByName(playerName);
      setPlayerData(data);
      console.log(data);
      setShowModal(false);
    } catch {
      setPlayerData({});
      setError(true);
      setShowModal(false);
    }
  };

  return (
    <Container>
      <CustomModal visible={showModal} />
      <Input
        placeholder="Digite o nome do player"
        value={playerName}
        onChangeText={setPlayerName}
        error={error}
      />
      <Button onPress={searchPlayer} />
      {Object.keys(playerData).length > 0 ? (
        <CustomView>
          <CustomText>Player Level:</CustomText>
          <CustomText>{playerData.summonerLevel}</CustomText>
        </CustomView>
      ) : null}
    </Container>
  );
}
