/** @format */

import { render, RenderResult } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ListPage } from "../ListPage";

describe("ListPage", () => {
	let renderResult: RenderResult;

	beforeEach(() => {
		renderResult = render(
			<MemoryRouter>
				<ListPage />
			</MemoryRouter>
		);
	});

	it("should render correctly", () => {
		const element = renderResult.getByTestId("listPage");

		expect(element).toBeInTheDocument();
	});

	it("snapshot", () => {
		const element = renderResult.getByTestId("listPage");

		expect(element).toMatchSnapshot();
	});
});
