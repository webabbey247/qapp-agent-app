import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  token:"",
  showOTPForm: false,
  showNewpassForm:false,
};


const loginSlice = createSlice({
  name: "forgetPass",
  initialState,
  reducers: {
    validateEmailPending: (state) => {
      state.isLoading = true;
    },
    validateEmailSuccess: (state, { payload }) => {
      console.log("...user data payload", payload)
      state.isLoading = false;
      state.showOTPForm = true
      state.error = payload;
    },
    validateEmailFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    validateOTPPending: (state) => {
      state.isLoading = true;
    },

    validateOTPSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload;
      state.showOTPForm = true
      state.error = "";
    },

    validateOTPFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.showOTPForm = false
    },

    validateNewPassPending: (state) => {
      state.isLoading = true;
    },
    validateNewPassSuccess: (state) => {
      state.isLoading = false;
      state.token = "";
      state.error = "";
    },
    validateNewPassFail: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { 
validateEmailPending,
validateEmailSuccess,
validateEmailFail,
validateOTPPending,
validateOTPSuccess,
validateOTPFail,
validateNewPassPending,
validateNewPassSuccess,
validateNewPassFail
 } = actions;

export default reducer;

