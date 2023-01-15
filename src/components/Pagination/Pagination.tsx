/** @format */

import { StyledContainer } from "./Pagination.styles";
import { IPaginationProps } from "./type";

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
			<button onClick={onChangePagePrev}>prev</button>
			<div>{currentPage}</div>
			<button onClick={onChangePageNext}>next</button>
		</StyledContainer>
	);
};
