import { ScanListItem } from "@/pages/home";
import styles from "./DownloadResultsButton.module.scss";
import { useAppSelector } from "@/hooks/ReduxHooks";

export default function DownloadResultsButton() {
	const items = useAppSelector((state) => state.scanItems.items);

	const downloadFile = () => {
		let fileContent = items
			.map(
				(item: ScanListItem) =>
					`${item.scanSum} - ${item.scanDate} - ${item.scanTime}`
			)
			.join("\n");

		const blob = new Blob([fileContent], { type: "text/plain" });
		const url = URL.createObjectURL(blob);

		const link = document.createElement("a");
		link.href = url;
		link.download = "РезультатыСканирования.txt";

		document.body.appendChild(link);
		link.click();

		URL.revokeObjectURL(url);
		document.body.removeChild(link);
	};
	return (
		<button className={styles.button} onClick={downloadFile}>
			Скачать результаты
		</button>
	);
}
