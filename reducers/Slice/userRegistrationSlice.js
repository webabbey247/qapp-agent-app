import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isRegistered: false,
  error: "",
};

const registerSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    registerPending: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.isRegistered = true;
      state.error = "";
    },
    registerFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = registerSlice;

export const { registerPending, registerSuccess, registerFail } = actions;

export default reducer;