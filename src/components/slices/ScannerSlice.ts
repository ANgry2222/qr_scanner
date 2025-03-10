import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Html5Qrcode } from "html5-qrcode";

interface ScannerState {
	scanner: Html5Qrcode | undefined;
	isScanning: boolean;
}

const initialState: ScannerState = {
	scanner: undefined,
	isScanning: false,
};

export const ScannerSlice = createSlice({
	name: "scanner",
	initialState,
	reducers: {
		setScanner: (state, action: PayloadAction<Html5Qrcode>) => {
			state.scanner = action.payload;
		},
		stopScanner: (state) => {
			if (state.scanner) {
				state.scanner.stop();
				state.isScanning = false;
			}
		},
		setIsScanning: (state, action: PayloadAction<boolean>) => {
			state.isScanning = action.payload;
		},
	},
});

export const { setScanner, stopScanner, setIsScanning } = ScannerSlice.actions;
export default ScannerSlice.reducer;
