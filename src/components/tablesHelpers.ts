export const goToUnit = (route: string) => {
	location.replace(route);
};

export const goToPage = (page: number, route: string) => {
	location.replace(`${route.toLowerCase()}?page=${page}`);
};

export const handleReloadClick = () => {
	location.reload();
};

export const getTitles = (data: object[]) => {
	return Object.keys(data[0]);
};

export const namingList = ["supplierId", "customerId", "employeeId", "productId"];
export const hrefNamingList = ["Company", "Name", "Id"];
