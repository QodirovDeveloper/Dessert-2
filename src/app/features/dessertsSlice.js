import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  desserts: [],
  totalPrice: 0,
  totalAmount: 0,
};

const dessertsSlice = createSlice({
  name: "desserts",
  initialState,
  reducers: {
    addDessert: (state, { payload }) => {
      dessertsSlice.caseReducers.calculateTotal();
    },
    removeDessert: (state, { payload }) => {
      dessertsSlice.caseReducers.calculateTotal();
    },
    clearDessert: (state, { payload }) => {
      dessertsSlice.caseReducers.calculateTotal();
    },
    calculateTotal: (state) => {},
  },
});

export const { addDessert, clearDessert, removeDessert } =
  dessertsSlice.actions;
export default dessertsReducer.reducer;
