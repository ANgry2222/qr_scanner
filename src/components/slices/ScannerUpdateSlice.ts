import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ScannerUpdateState {
	needsUpdateAfterResize: boolean;
	needsUpdateAfterReverse: boolean;
	currentDeviceIndex: number;
}

const initialState: ScannerUpdateState = {
	needsUpdateAfterResize: false,
	needsUpdateAfterReverse: false,
	currentDeviceIndex: 0,
};

export const ScannerUpdateSlice = createSlice({
	name: "scanner_update",
	initialState,
	reducers: {
		setReverseUpdate: (state, action: PayloadAction<boolean>) => {
			state.needsUpdateAfterReverse = action.payload;
		},
		setResizeUpdate: (state, action: PayloadAction<boolean>) => {
			state.needsUpdateAfterResize = action.payload;
		},
		changeDevice: (state) => {
			if (state.currentDeviceIndex === 0) {
				state.currentDeviceIndex = 1;
			} else {
				state.currentDeviceIndex = 0;
			}
		},
	},
});

export const { setReverseUpdate, setResizeUpdate, changeDevice } =
	ScannerUpdateSlice.actions;
export const selectAnimationStatus = (state: RootState) =>
	state.animate.isAnimating;
export default ScannerUpdateSlice.reducer;
