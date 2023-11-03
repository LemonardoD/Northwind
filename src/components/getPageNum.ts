export const getPagination = (currentPage: number, allPages: number) => {
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
	return { currPage, pagesList: [...new Set(resp)].sort((a, b) => a - b) };
};
