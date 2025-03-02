import { Html5Qrcode, CameraDevice } from "html5-qrcode";
import { useState } from "react";
import start_image from "../images/start_button_desktop.png";
import cross_image_mobile from "../images/cross_icon_mobile.png";
import cross_image_desktop from "../images/cross_icon_desktop.png";
import turn_camera_icon from "../images/turn_camera_icon.png";
import { isDesktop } from "react-device-detect";
import StartScanner from "./StartScanner";
import { stopScanner } from "./slices/ScannerSlice";
import { useAppDispatch } from "@/hooks/ReduxHooks";
import Image from "next/image";

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
			<Image
				onClick={onRequestCameraAccess}
				src={start_image.src}
				alt="Начать сканирование"
			/>
		);
	} else {
		if (!isDesktop) {
			return (
				<div>
					<Image
						style={{ marginRight: "27px" }}
						onClick={handleReverseClick}
						src={turn_camera_icon.src}
						alt="Поворот камеры"
					/>
					<Image
						onClick={handleStopScanClick}
						src={cross_image_mobile.src}
						alt="Остановить сканирование"
					/>
				</div>
			);
		} else {
			return (
				<Image
					onClick={handleStopScanClick}
					src={cross_image_desktop.src}
					alt="Остановить сканирование"
				/>
			);
		}
	}
}
