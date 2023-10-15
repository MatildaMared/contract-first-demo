import { ReactElement } from "react";
import {
	Queries,
	render,
	RenderOptions,
	RenderResult,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return <MemoryRouter>{children}</MemoryRouter>;
};

const customRender = <
	Q extends Queries,
	Container extends Element | DocumentFragment = HTMLElement,
	BaseElement extends Element | DocumentFragment = Container
>(
	ui: ReactElement,
	options?: RenderOptions<Q, Container, BaseElement>
): RenderResult<Q, Container, BaseElement> =>
	render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
