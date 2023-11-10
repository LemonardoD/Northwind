export const goToPage = (page: number, route: string) => {
	location.replace(`${route.toLowerCase()}?page=${page}`);
};

export const handleReloadClick = () => {
	location.reload();
};

export const getTitles = (data: object[]) => {
	return Object.keys(data[0]);
};

export const getDate = (strDate: string) => {
	if (strDate === "null") {
		return "null";
	}
	const date = new Date(strDate);
	return date.toISOString().split("T")[0];
};

export const getPriceFormat = (value: number) => {
	return `$${value.toFixed(2)}`;
};

export const namingList = ["supplierId", "customerId", "employeeId", "productId", "orderId", "reportsTo"];
export const hrefNamingList = ["Company", "Name", "Id"];
