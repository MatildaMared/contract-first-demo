import { describe, it, expect } from "vitest";
import { screen, render } from "./../utils/testUtils";
import CatsPage from "./CatsPage";

describe("Cats Page", () => {
	it("should render properly", () => {
		render(<CatsPage />);
		expect(screen.getByText("Cats Page")).toBeDefined();
	});

	it("should display the correct number of cats", async () => {
		render(<CatsPage />);
		const cats = await screen.findAllByTestId("cat");
		expect(cats).toHaveLength(3);
	});

	it("should display the cats name", async () => {
		render(<CatsPage />);
		const catName = await screen.findByText("Vincent");
		expect(catName).toBeDefined();
	});

	it("should display the cats age", async () => {
		render(<CatsPage />);
		const catAge = await screen.findByText("Age: 3");
		expect(catAge).toBeDefined();
	});

	it("should display the cats breed", async () => {
		render(<CatsPage />);
		const catBreed = await screen.findByText("Breed: Persian");
		expect(catBreed).toBeDefined();
	});
});
