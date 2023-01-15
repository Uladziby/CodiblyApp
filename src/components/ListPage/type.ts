/** @format */

import { ITableItems } from "./../Table/type";

export interface IResponseProducts {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: ITableItems[];
}

export interface IOptions {
	page: number;
	maxPage: number;
	isShowModal: boolean;
	choosedItem: ITableItems | undefined;
}

export type FormValues = {
	id: number;
};
