import { isDesktop } from "react-device-detect";
import DownloadResultsButton from "./DownloadResultsButton/DownloadResultsButton";
import ScanWindow from "./ScanWindow/ScanWindow";

export default function ScanSection() {
	return (
		<div className="scanner_container">
			<ScanWindow />
		</div>
	);
}
