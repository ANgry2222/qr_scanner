import {
	CameraDevice,
	Html5Qrcode,
	Html5QrcodeFullConfig,
	Html5QrcodeSupportedFormats,
} from "html5-qrcode";
import { ProcessScanData } from "./ProcessScanData";
import { addItem } from "./slices/ItemListSlice";
import { setScanner, setIsScanning } from "./slices/ScannerSlice";
import { store } from "../components/store";
import { setAnimation } from "./slices/AnimationSlice";

export default function StartScanner() {
	let previousScan = "";

	const scannerConfig: Html5QrcodeFullConfig = {
		verbose: false,
		formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
	};
	const currentDeviceIndex =
		store.getState().scanner_update.currentDeviceIndex;
	const scanner = new Html5Qrcode("reader", scannerConfig);
	store.dispatch(setScanner(scanner));
	Html5Qrcode.getCameras()
		.then((devices: CameraDevice[]) => {
			if (devices) {
				scanner
					.start(
						devices[currentDeviceIndex].id,
						{
							aspectRatio: 1,
							fps: 15,
							disableFlip: false,
						},
						(decodedText) => {
							if (previousScan !== decodedText) {
								previousScan = decodedText;
								store.dispatch(setAnimation(true));
								setTimeout(() => {
									store.dispatch(setAnimation(false));
								}, 1000);

								store.dispatch(
									addItem(ProcessScanData(decodedText))
								);
							}
						},
						() => {}
					)
					.then(() => {
						const videoElement = document.getElementById("reader")
							?.firstElementChild as HTMLVideoElement;
						if (videoElement) {
							videoElement.style.cssText = "";
							videoElement.classList.add("video");
						}
						store.dispatch(setIsScanning(true));
					})
					.catch((err) => {
						console.log(err);
						alert(`Произошла ошибка сканирования ${err}`);
					});
			}
		})
		.catch(() => {
			alert("Вы не предоставили доступ к камере!");
		});
}
