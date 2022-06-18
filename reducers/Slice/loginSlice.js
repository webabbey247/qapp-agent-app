import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
  user:{},
  token:"",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      console.log("...user data payload", payload)
      state.isLoading = false;
      state.isAuth = true;
      state.user = payload;
      state.error = "";
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = payload;
      state.error = "";
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    logoutPending: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = "";
    },
    logoutFail: (state) => {
      state.isLoading = false;
    },

    getTokenPending: (state) => {
      state.isLoading = true;
    },
    getTokenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload;
      state.error = "";
    },
    getTokenFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, 
  loginSuccess, loginFail, 
  getUserPending, getUserSuccess, 
  getUserFail, getTokenPending, 
  getTokenSuccess, getTokenFail,
  logoutPending, logoutSuccess, logoutFail
 } = actions;

export default reducer;

