import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./reducers/navSlice";

const store = configureStore({
  reducer: {
    navbar: navSlice,
  },
});

export default store;
