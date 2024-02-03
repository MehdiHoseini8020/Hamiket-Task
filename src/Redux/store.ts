import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./createSlice";

export const store = configureStore({
  reducer: {
    Reducer: profileReducer
  },
  
});

export type RoutState = ReturnType<typeof store.getState>;
export default store;
