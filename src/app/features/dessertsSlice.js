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
      state.desserts.push({ ...payload, amount: 1 });
      dessertsSlice.caseReducers.calculateTotal(state);
    },
    removeDessert: (state, { payload }) => {
      state.desserts = state.desserts.filter((item) => item.id !== payload);
      dessertsSlice.caseReducers.calculateTotal(state);
    },
    incrementDessert: (state, { payload }) => {
      const item = state.desserts.find((item) => item.id == payload);
      item.amount += 1;
      dessertsSlice.caseReducers.calculateTotal(state);
    },
    decrementAmount: (state, { payload }) => {
      const item = state.desserts.find((item) => item.id == payload);
      item.amount -= 1;
      dessertsSlice.caseReducers.calculateTotal(state);
    },
    clearDessert: (state, { payload }) => {
      state.desserts = [];
      dessertsSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let price = 0;
      let amount = 0;
      state.desserts.forEach((item) => {
        price += item.amount * item.price;
        amount += item.amount;
      });

      state.totalAmount = amount;
      state.price = price;
    },
  },
});

export const {
  addDessert,
  clearDessert,
  removeDessert,
  incrementDessert,
  decrementAmount,
} = dessertsSlice.actions;
export default dessertsSlice.reducer;
