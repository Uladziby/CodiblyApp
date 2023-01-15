/** @format */

export interface IPaginationProps {
	onChangePageHandler: (page: number) => void;
	currentPage: number;
	amountOfPages: number;
}
