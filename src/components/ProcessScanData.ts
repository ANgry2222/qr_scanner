export default function ProcessScanData(scanText: string) {
	let sum = scanText.split("&")[1].substring(2);
	let dateTimeString = scanText.split("&")[0].substring(2);
	let date = dateTimeString.substring(0, 8);
	let formattedDate = `${date.substring(6)}.${date.substring(
		4,
		6
	)}.${date.substring(0, 4)}`;
	let time = dateTimeString.substring(9);
	let formattedTime = `${time.substring(0, 2)}:${time.substring(2, 4)}`;

	return { scanSum: sum, scanDate: formattedDate, scanTime: formattedTime };
}
