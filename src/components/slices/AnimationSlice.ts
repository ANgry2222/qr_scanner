import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface AnimationState {
	isAnimating: boolean;
}

const initialState: AnimationState = {
	isAnimating: false,
};

export const AnimationSlice = createSlice({
	name: "animation",
	initialState,
	reducers: {
		setAnimation: (state, action: PayloadAction<boolean>) => {
			state.isAnimating = action.payload;
		},
	},
});

export const { setAnimation } = AnimationSlice.actions;
export const selectAnimationStatus = (state: RootState) =>
	state.animate.isAnimating;
export default AnimationSlice.reducer;
