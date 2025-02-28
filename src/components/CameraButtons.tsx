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
		return <img onClick={onRequestCameraAccess} src={start_image.src} />;
	} else {
		if (!isDesktop) {
			return (
				<div>
					<img
						style={{ marginRight: "27px" }}
						onClick={handleReverseClick}
						src={turn_camera_icon.src}
					/>
					<img
						onClick={handleStopScanClick}
						src={cross_image_mobile.src}
					/>
				</div>
			);
		} else {
			return (
				<img
					onClick={handleStopScanClick}
					src={cross_image_desktop.src}
				/>
			);
		}
	}
}
