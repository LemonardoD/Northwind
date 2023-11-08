import { writable, type Writable } from "svelte/store";
import type { Metric } from "../DTOs";

const metrics: Writable<Metric[]> = writable([]);

export const sqlMetric = metrics;

export function updateMetric(newMetric: Metric) {
	metrics.update(list => {
		return [...list, newMetric];
	});
}

export function countMetric(metrics: Metric[]) {
	let selectCount = 0;
	let whereCount = 0;
	let joinCount = 0;
	let resCount = 0;
	for (let i = 0; i < metrics.length; i++) {
		const lowerQuery = metrics[i].sqlQuery.toLowerCase();
		if (lowerQuery.includes("where")) {
			whereCount++;
		}
		if (lowerQuery.includes("left join")) {
			joinCount++;
		}
		selectCount++;
		resCount += metrics[i].resCount;
	}
	return { selectCount, whereCount, joinCount, resCount };
}
