export const getPageCount = (arr: object[]) => {
	return Math.ceil(arr.length / 20);
};

export const getPagination = (currentPage: number, arr: object[]) => {
	const allPages = getPageCount(arr);
	const currPage = currentPage === 0 ? 1 : currentPage;
	let resp = [1, allPages];
	for (let i = currPage - 3; i < currPage; i++) {
		if (i > 0) {
			resp.push(i);
		}
	}
	for (let i = currPage; i <= currPage + 6; i++) {
		if (i <= allPages) {
			resp.push(i);
		}
	}
	if (allPages - 1 > 0) resp.push(allPages - 1);
	return [...new Set(resp)].sort((a, b) => a - b);
};

export const getCurrPageValues = (arr: object[], currPage: number) => {
	return currPage === 1 ? arr.slice(0, 20) : arr.slice((currPage - 1) * 20, currPage * 20);
};
