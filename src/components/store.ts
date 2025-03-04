import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/ModalSlice";
import itemListReducer from "./slices/ItemListSlice";
import scannerReducer from "./slices/ScannerSlice";
import animationReducer from "./slices/AnimationSlice";
import scannerUpdateReducer from "./slices/ScannerUpdateSlice";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		scanItems: itemListReducer,
		scannerReducer: scannerReducer,
		animate: animationReducer,
		scanner_update: scannerUpdateReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
