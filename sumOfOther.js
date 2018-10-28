const make = (arr) => {
	const sum = arr.reduce((sum, value) => {
		return sum += value;
	}, 0);
	return arr.map((value) => {
		return sum - value;
	});
}