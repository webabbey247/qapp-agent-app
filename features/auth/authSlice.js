import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from "./authService";

const initialState = {
    user: [],
    userJWTToken: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    status: '',
    data: {},
}



//Register new user
export const register = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
    try {
        return await authService.register(formData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


export const forgetPass = createAsyncThunk('auth/forget-password', async (formData, thunkAPI) => {
    try {
        return await authService.forgetPass(formData)
    } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        return await authService.login(formData)
    } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // addToken: (state, action) => {
        //     state.userJWTToken = AsyncStorage.getItem('userAuthToken');
        // },
        // logout: (state, action) => {
        //     state.token = null,
        //     AsyncStorage.removeItem('userAuthToken')
        // },
        reset: (state) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = false,
                state.message = ''
        },
    },
    extraReducers: {
        [register.pending]: (state) => {
            state.isLoading = true
        },
        [register.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.registerPayload = action.payload
        },
        [register.rejected]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.registerPayload = action.payload
        },
    //         // ......................
        [forgetPass.pending]: (state) => {
            state.isLoading = true
        },
        [forgetPass.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.forgetPayload = action.payload
        },
        [forgetPass.rejected]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.forgetPayload = action.payload
        },
        //         // ......................
        [login.pending]: (state) => {
            state.isLoading = true
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.loginPayload = action.payload
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.loginPayload = action.payload
        },
      
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(register.pending, (state) => {
    //             state.isLoading = true
    //         })
    //         .addCase(register.fulfilled, (state, action) => {
    //             state.isLoading = false,
    //                 state.isSuccess = true,
    //                 state.registerPayload = action.payload
    //         })
    //         .addCase(register.rejected, (state, action) => {
    //             state.isLoading = false,
    //                 state.isError = true,
    //                 state.registerPayload = action.payload
    //         })

    //         // ......................

    //         .addCase(forgetPass.pending, (state) => {
    //             state.isLoading = true
    //         })
    //         .addCase(forgetPass.fulfilled, (state, action) => {
    //             state.isLoading = false,
    //                 state.isSuccess = true,
    //                 state.forgetPayload = action.payload
    //         })
    //         .addCase(forgetPass.rejected, (state, action) => {
    //             state.isLoading = false,
    //                 state.isError = true,
    //                 state.forgetPayload = action.payload
    //         })

    //         // ......................

    //         .addCase(login.pending, (state) => {
    //             state.isLoading = true
    //         })
    //         .addCase(login.fulfilled, (state, action) => {
    //             state.isLoading = false,
    //                 state.isSuccess = true,
    //                 state.loginPayload = action.payload
    //         })
    //         .addCase(login.rejected, (state, action) => {
    //             state.isLoading = false,
    //                 state.isError = true,
    //                 state.loginPayload = action.payload
    //         })
    // }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;
