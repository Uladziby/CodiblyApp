/** @format */

export interface ITableProps {
	items: ITableItems[] | null;
	className?: string;
	onShowModalHandler: () => void;
}

export interface ITableItems {
	id: number;
	name: string;
	color: string;
	value: string;
	year: number;
}
