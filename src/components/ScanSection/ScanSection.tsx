import ScanWindow from "../ScanWindow/ScanWindow";
import styles from "./ScanSection.module.scss";

export default function ScanSection() {
	return (
		<div className={styles.scanner_container}>
			<ScanWindow />
		</div>
	);
}
