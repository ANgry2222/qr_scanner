import ScannerBorder from "../ScannerBorder/ScannerBorder";
import styles from "./ScanWindow.module.scss";

export default function ScanWindow() {
	return (
		<div className={styles.scanner_area}>
			<div id="reader"></div>
			<ScannerBorder />
		</div>
	);
}
