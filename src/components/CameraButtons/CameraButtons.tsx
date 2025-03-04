import { Html5Qrcode, CameraDevice } from "html5-qrcode";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import StartScanner from "../StartScanner";
import { stopScanner } from "../slices/ScannerSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import { StartIcon } from "../icons/StartIcon";
import styles from "./CameraButtons.module.scss";
import { StopIcon } from "../icons/StopIcon";
import { ReverseIcon } from "../icons/RevreseIcon";
import { changeDevice, setReverseUpdate } from "../slices/ScannerUpdateSlice";

export default function CameraButtons() {
	const [isScanning, setIsScanning] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const scannerUpdateResize = useAppSelector(
		(state) => state.scanner_update.needsUpdateAfterResize
	);
	const scannerUpdateReverse = useAppSelector(
		(state) => state.scanner_update.needsUpdateAfterReverse
	);

	useEffect(() => {
		if (scannerUpdateResize || scannerUpdateReverse) {
			if (scannerUpdateReverse) {
				dispatch(changeDevice());
				dispatch(setReverseUpdate(false));
			}
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
		}
	}, [scannerUpdateResize, scannerUpdateReverse, dispatch]);
	const handleReverseClick = () => {
		dispatch(setReverseUpdate(true));
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
