import { Html5Qrcode, CameraDevice } from "html5-qrcode";
import { useState } from "react";
import { isDesktop } from "react-device-detect";
import StartScanner from "../StartScanner";
import { stopScanner } from "../slices/ScannerSlice";
import { useAppDispatch } from "@/hooks/ReduxHooks";
import { StartIcon } from "../icons/StartIcon";
import styles from "./CameraButtons.module.scss";
import { StopIcon } from "../icons/StopIcon";
import { ReverseIcon } from "../icons/RevreseIcon";

export default function CameraButtons() {
	const [isScanning, setIsScanning] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const handleReverseClick = () => {
		console.log("reverse");
	};

	const handleStopScanClick = () => {
		dispatch(stopScanner());
		setIsScanning(false);
	};

	const onRequestCameraAccess = () => {
		Html5Qrcode.getCameras()
			.then((devices: CameraDevice[]) => {
				if (devices) {
					try {
						StartScanner(devices);
						setIsScanning(true);
					} catch (error) {
						console.log(error);
					}
				}
			})
			.catch((err) => {
				alert(err);
			});
	};

	if (!isScanning) {
		return (
			<StartIcon
				onClick={onRequestCameraAccess}
				className={styles.start_button}
			/>
		);
	} else {
		if (!isDesktop) {
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
				<StopIcon
					className={styles.stop_button}
					onClick={handleStopScanClick}
				/>
			);
		}
	}
}
