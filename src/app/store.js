import { configureStore } from "@reduxjs/toolkit";
import dessertsReducer from './features/dessertsSlice'

export const store = configureStore({
  reducer: {
    dessert: dessertsReducer
  }
})