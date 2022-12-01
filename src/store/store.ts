import { configureStore } from '@reduxjs/toolkit';
import { completeprojectReducer } from './interfaces/completeProject/completProjectSlice';
import { menuReducer } from './interfaces/menu/menuSlice';

export const store = configureStore({
	reducer: {
		completeProject: completeprojectReducer,
		menu: menuReducer
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch