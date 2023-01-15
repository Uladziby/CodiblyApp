/** @format */

import { MouseEvent } from "react";
import ReactDOM from "react-dom";
import {
	BackButton,
	CloseButton,
	StyledContainer,
	StyledCover,
	StyledHeader,
	StyledText,
} from "./ModalWindow.styles";
import { ModalWindowProps } from "./type";

export const ModalWindow = ({ children, onCloseHandler, onBackHandler }: ModalWindowProps) => {
	const onClose = (e: MouseEvent<HTMLElement>) => {
		e.stopPropagation();

		if (e.target === e.currentTarget) onCloseHandler?.();
	};

	const createWrapper = () => (
		<StyledContainer>
			<StyledHeader>
				{onBackHandler && (
					<BackButton onClick={onBackHandler} data-testid="modalBackButton">
						<StyledText>Back</StyledText>
					</BackButton>
				)}
				<CloseButton onClick={onClose} data-testid="modalCloseButton"></CloseButton>
			</StyledHeader>
			{children}
		</StyledContainer>
	);

	return ReactDOM.createPortal(
		<StyledCover onClick={onClose}>{createWrapper()}</StyledCover>,
		document.getElementById("root") as HTMLElement
	);
};
