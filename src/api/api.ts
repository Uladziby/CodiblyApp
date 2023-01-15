/** @format */

import { IResponseProducts } from "../components/ListPage/type";

const BASE_URL = "https://reqres.in/api/products";

const baseFetch = (url: string, options?: RequestInit) =>
	fetch(url, options).then(async (response: Response) => {
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			if (response.status === 404) {
				return Promise.reject("Resource not found");
			}
			if (response.status === 500) {
				return Promise.reject("Server error");
			}
		}
	});

export const fetchProducts = (page: number): Promise<IResponseProducts> => {
	return baseFetch(`${BASE_URL}?page=${page}&per_page=5`);
};
