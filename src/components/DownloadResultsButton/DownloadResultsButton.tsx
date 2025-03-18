import { ScanListItem } from "@/pages";
import styles from "./DownloadResultsButton.module.scss";
import { useAppSelector } from "@/hooks/ReduxHooks";
import { calculateSum } from "../TotalSum/TotalSum";

export default function DownloadResultsButton() {
	const items = useAppSelector((state) => state.scanItems.items);

	const downloadFile = () => {
		let fileContent = "Покупки:\n";
		fileContent += items
			.map(
				(item: ScanListItem) =>
					`${item.scanSum}\t${item.scanDate}\t${item.scanTime}`
			)
			.join("\n");
		fileContent += `\n-------\nОбщая сумма: ${calculateSum(items)} рублей.`;

		const blob = new Blob([fileContent], { type: "text/plain" });
		const url = URL.createObjectURL(blob);

		const link = document.createElement("a");
		link.href = url;
		const downloadDate = new Date()
			.toLocaleDateString()
			.replaceAll(".", "-");
		const downloadTime = new Date()
			.toLocaleTimeString()
			.replaceAll(":", "-");

		link.download = `Чеки_${downloadDate}_${downloadTime}`;

		document.body.appendChild(link);
		link.click();

		URL.revokeObjectURL(url);
		document.body.removeChild(link);
	};
	return (
		<button
			disabled={items.length === 0}
			className={styles.button}
			onClick={downloadFile}
		>
			Скачать результаты
		</button>
	);
}
