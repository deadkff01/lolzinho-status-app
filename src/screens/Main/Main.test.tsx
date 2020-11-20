import React from "react";
import axiosMock from "axios";
import Main from "./Main";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { player } from "../../__mocks__/player";

describe("Main", () => {
  test("Generate snapshot", () => {
    const { toJSON } = render(<Main />);
    expect(toJSON()).toMatchSnapshot();
  });

  test("Render elements", () => {
    const { getByTestId } = render(<Main />);

    const input = getByTestId("player-name-input");
    expect(input).toBeTruthy();
  });

  test("Get Player", async () => {
    const { getByTestId } = render(<Main />);

    axiosMock.post.mockResolvedValueOnce({
      data: player,
    });

    const input = getByTestId("player-name-input");
    fireEvent.changeText(input, "deadknopf");

    const search = getByTestId("button-search");
    fireEvent.press(search);

    const playerData = await waitFor(() => getByTestId("player-data"));
    expect(playerData).toBeTruthy();
  });
});
