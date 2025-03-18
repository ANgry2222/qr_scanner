export const ProcessScanData = (scanText: string) => {
	const sum = scanText.split("&")[1].substring(2);
	const dateTimeString = scanText.split("&")[0].substring(2);
	const date = dateTimeString.substring(0, 8);
	const formattedDate = `${date.substring(6, 8)}.${date.substring(
		4,
		6
	)}.${date.substring(0, 4)}`;
	const time = dateTimeString.substring(9);
	const formattedTime = `${time.substring(0, 2)}:${time.substring(2, 4)}`;
	return {
		scanSum: sum,
		scanDate: formattedDate,
		scanTime: formattedTime,
	};
};

export const LocalizeDate = (dateString: string) => {
	return `${dateString.split("-")[2]}.${dateString.split("-")[1]}.${
		dateString.split("-")[0]
	}`;
};
