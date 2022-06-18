import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  deviceList:[],
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    fetchDevicePending: (state) => {
      state.isLoading = true;
    },

    fetchDeviceSuccess: (state, { payload }) => {
        console.log("hero loading", payload)
      console.log("...user data payload", payload)
      state.isLoading = false;
      state.deviceList = payload;
      state.error = "";
    },

    fetchDeviceFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    }
  },
});

const { reducer, actions } = deviceSlice;

export const { 
    fetchDevicePending, 
    fetchDeviceSuccess, 
    fetchDeviceFail 
} = actions;

export default reducer;

