export default function ProcessScanData(scanText: string) {
	const sum = scanText.split("&")[1].substring(2);
	const dateTimeString = scanText.split("&")[0].substring(2);
	const date = dateTimeString.substring(0, 8).toLocaleLowerCase();
	const time = dateTimeString.substring(9).toLocaleLowerCase();
	return { scanSum: sum, scanDate: date, scanTime: time };
}

export const LocalizeDate = (dateString: string) => {
	return `${dateString.split("-")[2]}.${dateString.split("-")[1]}.${
		dateString.split("-")[0]
	}`;
};
