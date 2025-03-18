import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./slices/ModalSlice";
import itemListReducer from "./slices/ItemListSlice";
import scannerReducer from "./slices/ScannerSlice";
import animationReducer from "./slices/AnimationSlice";
import scannerUpdateReducer from "./slices/ScannerUpdateSlice";

export const rootReducer = combineReducers({
	modal: modalReducer,
	scanItems: itemListReducer,
	scannerReducer,
	animate: animationReducer,
	scanner_update: scannerUpdateReducer,
});
