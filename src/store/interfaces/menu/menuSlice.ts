import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './intialState';

const menuSlice = createSlice({
	name: 'completeProject',
	initialState: initialState,
	reducers: {
		addmenu(state, { payload }: PayloadAction<boolean>) {
			state.menuOn = payload;
		},
		addColor(state, { payload }: PayloadAction<boolean>) {
			state.colorOn = payload;
		},
	}
});

export const { addmenu, addColor } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;