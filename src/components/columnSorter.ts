export const sorter = (obj4Sort: Record<string, string | number>) => {
	const keys = Object.keys(obj4Sort);
	let firstObj: Record<string, string | number> = {};
	let secondObj: Record<string, string | number> = {};
	for (let i = 0; i < keys.length; i++) {
		if (i + 1 <= Math.ceil(keys.length / 2)) {
			firstObj[keys[i]] = obj4Sort[keys[i]];
		}
		if (i + 1 > Math.ceil(keys.length / 2)) {
			secondObj[keys[i]] = obj4Sort[keys[i]];
		}
	}

	return [firstObj, secondObj];
};
