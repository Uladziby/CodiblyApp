/** @format */

import { ITableItems } from "./../Table/type";
export const filterProducts = (id: number, products: ITableItems[]) =>
	id ? products.filter((item) => item.id == id) : products;
