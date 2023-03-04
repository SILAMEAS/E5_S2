import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qty: 0,
  ProDetail: {},
  carsU: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    buyOne: (state) => {
      state.qty += 1;
    },
    unBuyOne: (state) => {
      state.qty -= 1;
    },
    setBuy: (state, action) => {
      state.qty += action.payload;
    },
    setProDetail: (state, action) => {
      state.ProDetail = action.payload;
    },
    setCarsu: (state, action) => {
      state.carsU = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { buyOne, unBuyOne, setBuy, setProDetail, setCarsu } =
  counterSlice.actions;

export default counterSlice.reducer;
