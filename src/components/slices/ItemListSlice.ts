import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScanListItem } from "@/pages/home";
import { RootState } from "../store";

export interface ItemListState {
	items: ScanListItem[];
}

const initialState: ItemListState = {
	items: [],
};

export const ItemListSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		clearItemsList: (state) => {
			state.items = [];
		},
		addItem: (state, action: PayloadAction<ScanListItem>) => {
			state.items.push(action.payload);
		},
		removeItemByIndex: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item, i) => i !== action.payload);
		},
	},
});

export const { clearItemsList, addItem, removeItemByIndex } =
	ItemListSlice.actions;
export const selectItems = (state: RootState) => state.scanItems.items;
export default ItemListSlice.reducer;
