import { rest } from "msw";
import { catsResponse } from "./responses";

export const handlers = [
  rest.get("http://someurl.com/cats", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(catsResponse)
    )
  }),
];
