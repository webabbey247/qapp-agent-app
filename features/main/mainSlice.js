import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mainService from "./mainService";

const initialState = {
    banks: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    status: '',
    activeBanks: {},
    pendingBanks:{},
    approvedBanks:{},
    inertBanks:{}
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

//Onboard Bank
export const onboardBank = createAsyncThunk('onboarding/agent/bank', async (formData,thunkAPI) => {
    try {
        return await mainService.onboardBank(formData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


//Get Active Bank
export const getActiveBanks = createAsyncThunk('/agents/active-banks', async (token,thunkAPI) => {
    try {
        return await mainService.getActiveBanks(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

//Get Approved Bank
export const getApprovedBank = createAsyncThunk('approved/banks', async (formData,thunkAPI) => {
    try {
        return await mainService.getApprovedBank(formData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

//Get Pending Bank
export const getPendingBanks = createAsyncThunk('/agents/pending-banks', async (formData,thunkAPI) => {
    try {
        return await mainService.getPendingBanks(formData)
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
                state.isError = false
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

        [onboardBank.pending]: (state) => {
            state.isLoading = true
        },
        [onboardBank.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.onboardPayload = action.payload
        },
        [onboardBank.rejected]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.onboardPayload = action.payload
        },

               
        [getActiveBanks.pending]: (state) => {
            state.isLoading = true
        },

        [getActiveBanks.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.activeBanks = action.payload
        },

        [getActiveBanks.rejected]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = action.payload
        },

        [getApprovedBank.pending]: (state) => {
            state.isLoading = true
        },

        [getApprovedBank.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.approvedBanks = action.payload
        },

        [getApprovedBank.rejected]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = action.payload
        },
        [getPendingBanks.pending]: (state) => {
            state.isLoading = true
        },
        [getPendingBanks.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.pendingBanks = action.payload
        },
        [getPendingBanks.rejected]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = action.payload
        },  
    }
})

export const { reset } = mainSlice.actions;
export default mainSlice.reducer;