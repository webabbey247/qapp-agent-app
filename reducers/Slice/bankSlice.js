import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banks: [],
  isLoading: false,
  error: "",
  isOnboarded: false,
  activeBankList: [],
  approvedBankList: [],
  pendingBankList: [],
  inertBankList: [],
};

const bankSlice = createSlice({
  name: "banks",
  initialState,
  reducers: {
    postOnboardBankPending: (state) => {
      state.isLoading = true;
    },
    postOnboardBankSuccess: (state) => {
      console.log("...all onboarding slice payload", payload)
      state.isOnboarded = true;
      state.isLoading = false;
    },
    postOnboardBankFail: (state, { payload }) => {
      state.isLoading = false;
      state.isOnboarded = false;
      state.error = payload;
    },

    fetchBankPending: (state) => {
      state.isLoading = true;
    },
    fetchBankSuccess: (state, {payload}) => {
      console.log("...all bank slice payload", payload)
      state.banks = payload;
      state.isLoading = false;
    },
    fetchBankFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    fetchActiveBankPending: (state) => {
      state.isLoading = true;
    },

    fetchActiveBankSuccess: (state, {payload}) => {
      console.log("...active bank slice payload", payload)
      state.activeBankList = payload;
      state.isLoading = false;
    },
    fetchActiveBankFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    fetchPendingBankPending: (state) => {
      state.isLoading = true;
    },
    fetchPendingBankSuccess: (state, {payload}) => {
      console.log("...pending bank slice payload", payload)
      state.pendingBankList = payload;
      state.isLoading = false;
    },
    fetchPendingBankFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    fetchApprovedBankPending: (state) => {
      state.isLoading = true;
    },
    fetchApprovedBankSuccess: (state, {payload}) => {
      console.log("...approved bank slice payload", payload)
      state.approvedBankList = payload;
      state.isLoading = false;
    },
    fetchApprovedBankFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

  },
  
});

const { reducer, actions } = bankSlice;

export const {
  postOnboardBankPending,
  postOnboardBankSuccess,
  postOnboardBankFail,
  fetchBankPending,
  fetchBankSuccess,
  fetchBankFail,
  fetchActiveBankPending,
  fetchActiveBankSuccess,
  fetchActiveBankFail,
  fetchPendingBankPending,
  fetchPendingBankSuccess,
  fetchPendingBankFail,
  fetchApprovedBankPending,
  fetchApprovedBankSuccess,
  fetchApprovedBankFail,


} = actions;

export default reducer;