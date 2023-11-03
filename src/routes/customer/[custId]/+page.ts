import type { PageLoad } from "./$types";

export const load: PageLoad = ({ fetch, params }) => {
	const fetchApi = async (cmpId: string) => {
		const apiResponse = await fetch(`https://dummyjson.com/products/${cmpId}`);
		const data = await apiResponse.json();
		return data;
	};
	return {
		supplier: fetchApi(params.cmpId),
	};
};
