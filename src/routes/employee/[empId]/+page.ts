import type { PageLoad } from "./$types";

export const load: PageLoad = ({ fetch, params }) => {
	const fetchApi = async (id: string) => {
		const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
		const data = await apiResponse.json();
		return data;
	};
	return {
		employee: fetchApi(params.empId),
	};
};
