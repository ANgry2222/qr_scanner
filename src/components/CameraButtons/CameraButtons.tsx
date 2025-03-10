import { isMobile } from "react-device-detect";
import StartScanner from "../StartScanner";
import { stopScanner } from "../slices/ScannerSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import { StartIcon } from "../icons/StartIcon";
import styles from "./CameraButtons.module.scss";
import { StopIcon } from "../icons/StopIcon";
import { ReverseIcon } from "../icons/RevreseIcon";
import { changeDevice } from "../slices/ScannerUpdateSlice";

export default function CameraButtons() {
	const dispatch = useAppDispatch();
	const isScanning = useAppSelector(
		(state) => state.scannerReducer.isScanning
	);

	const handleReverseClick = () => {
		dispatch(changeDevice());
		setTimeout(() => {
			dispatch(stopScanner());
			StartScanner();
		}, 200);
	};

	const handleStopScanClick = () => {
		dispatch(stopScanner());
	};

	const onRequestCameraAccess = () => {
		StartScanner();
	};

	if (!isScanning) {
		return (
			<StartIcon
				onClick={onRequestCameraAccess}
				className={styles.start_button}
			/>
		);
	} else {
		if (isMobile) {
			return (
				<div>
					<ReverseIcon
						className={styles.reverse_button}
						onClick={handleReverseClick}
					/>
					<StopIcon
						className={styles.stop_button}
						onClick={handleStopScanClick}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<StopIcon
						className={styles.stop_button}
						onClick={handleStopScanClick}
					/>
				</div>
			);
		}
	}
}
