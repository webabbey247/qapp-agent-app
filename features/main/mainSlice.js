import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mainService from "./mainService";

const initialState = {
    banks: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    status: '',
    data: {},
}



//Get Agent Bank
export const getAgentBanks = createAsyncThunk('agent/get-all-banks', async (thunkAPI) => {
    try {
        return await mainService.getAgentBanks()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const mainSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = false,
                state.message = ''
        },
    },
    extraReducers: {
        [getAgentBanks.pending]: (state) => {
            state.isLoading = true
        },
        [getAgentBanks.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.getBankPayload = action.payload
        },
        [getAgentBanks.rejected]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.getBankPayload = action.payload
        },
    }
})

export const { reset } = mainSlice.actions;
export default mainSlice.reducer;