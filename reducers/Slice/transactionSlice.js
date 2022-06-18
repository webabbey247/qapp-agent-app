import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  transactionList:[],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    fetchTransactionPending: (state) => {
      state.isLoading = true;
    },

    fetchTransactionSuccess: (state, { payload }) => {
        console.log("transaction slice loading", payload)
      state.isLoading = false;
      state.transactionList = payload;
      state.error = "";
    },

    fetchTransactionFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    }
  },
});

const { reducer, actions } = transactionSlice;

export const { 
    fetchTransactionPending, 
    fetchTransactionSuccess, 
    fetchTransactionFail 
} = actions;

export default reducer;

