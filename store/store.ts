import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import cardSlice from "./card-slice";

const store = configureStore({
  reducer: { card: cardSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
