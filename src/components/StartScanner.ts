import {
	CameraDevice,
	Html5Qrcode,
	Html5QrcodeFullConfig,
	Html5QrcodeSupportedFormats,
} from "html5-qrcode";
import ProcessScanData from "./ProcessScanData";
import { addItem } from "./slices/ItemListSlice";
import { setScanner } from "./slices/ScannerSlice";
import { store } from "../components/store";
import { setAnimation } from "./slices/AnimationSlice";

export default function StartScanner(data: CameraDevice[]) {
	let previousScan = "";

	const scannerConfig: Html5QrcodeFullConfig = {
		verbose: false,
		formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
	};
	const currentDeviceIndex =
		store.getState().scanner_update.currentDeviceIndex;
	const scanner = new Html5Qrcode("reader", scannerConfig);
	store.dispatch(setScanner(scanner));

	scanner
		.start(
			data[currentDeviceIndex].id,
			{
				aspectRatio: 1,
				fps: 15,
			},
			(decodedText) => {
				if (previousScan !== decodedText) {
					store.dispatch(setAnimation(true));
					setTimeout(() => {
						store.dispatch(setAnimation(false));
					}, 1000);
					previousScan = decodedText;
					store.dispatch(addItem(ProcessScanData(decodedText)));
				}
			},
			(errorMessage) => {
				console.log(errorMessage);
			}
		)
		.catch((err) => {
			alert(`Произошла ошибка сканирования ${err.message}`);
		});

	return null;
}
