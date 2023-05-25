import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initalState";

const completeProjectSlice = createSlice({
  name: "completeProject",
  initialState: initialState,
  reducers: {
    addId(state, { payload }: PayloadAction<string>) {
      state.id = payload;
    },
    addProject(state, { payload }: PayloadAction<boolean>) {
      state.project = payload;
    },
  },
});

export const { addId, addProject } = completeProjectSlice.actions;
export const completeprojectReducer = completeProjectSlice.reducer;
