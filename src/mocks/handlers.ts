import { rest } from "msw";
import { catsResponse } from "./responses";

export const handlers = [
	// // Successful GET request to /cats
	rest.get("http://someurl.com/cats", (_, res, ctx) => {
		return res(ctx.status(200), ctx.json(catsResponse));
	}),

	// GET request to /cats that returns a 404 status code
	// rest.get("http://someurl.com/cats", (_, res, ctx) => {
	// 	return res(ctx.status(404), ctx.json({ message: "No cats found... 😿" }));
	// }),
];
