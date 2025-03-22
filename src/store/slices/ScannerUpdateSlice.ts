import { createSlice } from "@reduxjs/toolkit";

export interface ScannerUpdateState {
	needsUpdateAfterReverse: boolean;
	currentDeviceIndex: number;
}

const initialState: ScannerUpdateState = {
	needsUpdateAfterReverse: false,
	currentDeviceIndex: 0,
};

export const ScannerUpdateSlice = createSlice({
	name: "scanner_update",
	initialState,
	reducers: {
		changeDevice: (state) => {
			if (state.currentDeviceIndex === 0) {
				state.currentDeviceIndex = 1;
			} else {
				state.currentDeviceIndex = 0;
			}
		},
	},
});

export const { changeDevice } = ScannerUpdateSlice.actions;
export default ScannerUpdateSlice.reducer;
