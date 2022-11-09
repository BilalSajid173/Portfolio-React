import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./darkmode";

const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});

export default store;
