/** @format */

import { StyledButton, StyledContainer } from "./Pagination.styles";
import { IPaginationProps } from "./type";
import { ReactComponent as IconRight } from "../../assets/arrow_right.svg";
import { ReactComponent as IconLeft } from "../../assets/arrow_left.svg";

export const Pagination = ({
	onChangePageHandler,
	currentPage,
	amountOfPages,
}: IPaginationProps) => {
	const onChangePagePrev = () => {
		if (currentPage > 1) {
			onChangePageHandler(currentPage - 1);
		}
	};
	const onChangePageNext = () => {
		if (currentPage < amountOfPages) onChangePageHandler(currentPage + 1);
	};
	return (
		<StyledContainer>
			<StyledButton onClick={onChangePagePrev}>
				<IconLeft />
			</StyledButton>
			<div>{currentPage}</div>
			<StyledButton onClick={onChangePageNext}>
				<IconRight />
			</StyledButton>
		</StyledContainer>
	);
};
