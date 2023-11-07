import type { PageLoad } from "./$types";

export const load: PageLoad = ({ fetch, params }) => {
	const fetchApi = async (id: string) => {
		const apiResponse = await fetch(`https://northwindtraders-production.up.railway.app/product/${id}`);
		const data = await apiResponse.json();
		return data;
	};
	return {
		product: fetchApi(params.prdId),
	};
};
