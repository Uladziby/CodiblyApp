/** @format */

import { render, RenderResult, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModalWindow } from "../ModalWindow";

describe("modalWindow", () => {
	let renderResult: RenderResult;
	const prop = {
		children: <div>Portal</div>,
		onCloseHandler: jest.fn(),
	};
	let modalRoot = document.createElement("div");
	modalRoot.setAttribute("id", "root");

	beforeEach(() => {
		document.body.appendChild(modalRoot);
		renderResult = render(<ModalWindow {...prop} />);
	});

	it("should render correctly", () => {
		const element = renderResult.getByTestId("modalWindow");

		expect(element).toBeInTheDocument();
	});

	it("snapshot", () => {
		const element = renderResult.getByTestId("modalWindow");

		expect(element).toMatchSnapshot();
	});

	it("modal shows with close button", () => {
		const { getByRole } = screen;

		const closeButton = getByRole(/button/i);

		userEvent.click(closeButton);

		expect(prop.children).toEqual(<div>Portal</div>);
		expect(prop.onCloseHandler).toHaveBeenCalled();
	});

	it("should be mounted and unmounted", () => {
		renderResult.rerender(<ModalWindow {...prop} />);

		expect(modalRoot).not.toBeEmptyDOMElement();
		renderResult.unmount();
		expect(modalRoot).toBeEmptyDOMElement();
	});
});
