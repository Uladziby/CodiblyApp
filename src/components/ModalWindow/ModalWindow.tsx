/** @format */

import { MouseEvent } from "react";
import ReactDOM from "react-dom";
import { CloseButton, StyledContainer, StyledCover, StyledHeader } from "./ModalWindow.styles";
import { ReactComponent as IconClose } from "../../assets/clear.svg";
import { ModalWindowProps } from "./type";

export const ModalWindow = ({ children, onCloseHandler }: ModalWindowProps) => {
	const onClose = (e: MouseEvent<HTMLElement>) => {
		e.stopPropagation();

		if (e.target === e.currentTarget) onCloseHandler?.();
	};

	const createWrapper = () => (
		<StyledContainer>
			<StyledHeader>
				<CloseButton onClick={onClose} data-testid="modalCloseButton">
					<IconClose />
				</CloseButton>
			</StyledHeader>
			{children}
		</StyledContainer>
	);

	return ReactDOM.createPortal(
		<StyledCover data-testid="modalWindow" onClick={onClose}>
			{createWrapper()}
		</StyledCover>,
		document.getElementById("root") as HTMLElement
	);
};
