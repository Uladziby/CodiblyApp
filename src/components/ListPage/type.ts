/** @format */

import { ITableItems } from "./../Table/type";
/** @format */

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
}

export type FormValues = {
	id: number;
};
