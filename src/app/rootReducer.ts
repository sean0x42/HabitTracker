import { combineReducers } from "@reduxjs/toolkit";
import habitReducer from "../store/habitSlice";
import historyReducer from "../store/historySlice";

export const rootReducer = combineReducers({
  habits: habitReducer,
  history: historyReducer,
});
