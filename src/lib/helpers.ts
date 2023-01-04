export const filterByString = <T, K extends keyof T>(
	data: T[],
	field: K,
	filter: string
): T[] =>
	data.filter(
		(el: T) =>
			(el[field as keyof typeof el] as string)
				.toLowerCase()
				.indexOf(filter.toLowerCase()) !== -1
	);
