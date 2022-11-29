import { configureStore } from '@reduxjs/toolkit';
import { completeprojectReducer } from './interfaces/completeProject/completProjectSlice';

export const store = configureStore({
	reducer: {
		completeProject: completeprojectReducer
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch