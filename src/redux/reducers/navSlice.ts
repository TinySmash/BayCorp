import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: false,
  reducers: {
    toggleNav: (state): boolean => !state,
  },
});

export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;
