import type { PageLoad } from "../supplier/[cmpId]/$types";

export const load: PageLoad = ({ fetch }) => {
	const fetchApi = async () => {
		const apiResponse = await fetch("https://northwindtraders-production.up.railway.app/suppliers", {
			method: "GET",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "error",
			referrerPolicy: "no-referrer",
		});
		const data = await apiResponse.json();
		return data;
	};
	return {
		suppliers: fetchApi(),
	};
};
