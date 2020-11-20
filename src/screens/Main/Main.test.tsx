import React from "react";
import Main from "./Main";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

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
});
