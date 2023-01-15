/** @format */

const BASE_URL = "https://reqres.in/api/products";

export const baseFetch = (url: string, options?: RequestInit) =>
	fetch(url, options).then(async (response: Response) => {
		let data;
		try {
			data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}

		if (!response.ok) {
			return Promise.reject(data);
		}
	});

export const fetchProducts = (page: number) => {
	return baseFetch(`${BASE_URL}?page=${page}&per_page=5}`);
};
