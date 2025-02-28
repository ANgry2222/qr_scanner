import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Html5Qrcode } from "html5-qrcode";

interface ScannerState {
	scanner: Html5Qrcode | undefined;
}

const initialState: ScannerState = {
	scanner: undefined,
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
			}
		},
	},
});

export const { setScanner, stopScanner } = ScannerSlice.actions;
export default ScannerSlice.reducer;
