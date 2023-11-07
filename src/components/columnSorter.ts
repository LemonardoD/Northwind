import { getDate, getPriceFormat, namingList } from "./tablesHelpers";

export const sorter = (obj4Sort: Record<string, string | number>) => {
	const workingObj = valueChanger(obj4Sort);
	const keys = Object.keys(workingObj);
	const cntLength = Math.ceil((keys.length - 1) / 2);
	let firstObj: Record<string, string | number> = {};
	let secondObj: Record<string, string | number> = {};
	for (let i = 0; i < keys.length; i++) {
		if (i <= cntLength) {
			firstObj[keys[i]] = workingObj[keys[i]];
		}
		if (i > cntLength) {
			secondObj[keys[i]] = workingObj[keys[i]];
		}
	}
	return [firstObj, secondObj];
};

const dollarSign = ["Freight", "Order Price", "Unit Price"];
const dollarSignOrder = ["Total Price", "Total Discount"];
const dates = ["Birth Date", "Hire Date"];
const datesOrder = ["Shipped Date", "Required Date", "Order Date"];
const valueChanger = (obj4Sort: Record<string, string | number>) => {
	const keys = Object.keys(obj4Sort);
	for (let el of keys) {
		if (dollarSign.includes(el)) {
			obj4Sort[el] = `$ ${obj4Sort[el]}`;
		}
		if (dollarSignOrder.includes(el)) {
			obj4Sort[el] = getPriceFormat(obj4Sort[el] as number);
		}
		if (dates.includes(el)) {
			obj4Sort[el] = `${obj4Sort[el]}`.split("T")[0];
		}
		if (datesOrder.includes(el)) {
			obj4Sort[el] = getDate(obj4Sort[el] as string);
		}
	}
	return obj4Sort;
};
