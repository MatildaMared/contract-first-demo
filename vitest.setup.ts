import { afterAll, afterEach, beforeAll, expect } from "vitest";
import { setupServer } from "msw/node";
import { handlers } from "./src/mocks/handlers";
import { fetch } from "cross-fetch";

global.fetch = fetch;
const mockServer = setupServer(...handlers);

beforeAll(() => mockServer.listen());
afterAll(() => mockServer.close());
afterEach(() => mockServer.resetHandlers());
