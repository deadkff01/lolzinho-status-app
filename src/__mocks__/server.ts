import { rest } from "msw";
import { setupServer } from "msw/node";
import { player } from "./player";

export const server = setupServer();

export const getPlayer = () =>
  rest.post("http://127.0.0.1:3333/player", (_, res, ctx) => {
    console.log("eree");
    return res(ctx.status(200), ctx.json(player));
  });
