import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from "./authService";

const userToken = async() => {
    try{
        const token = await AsyncStorage.getItem('userAuthToken')
        return token;
    }
    catch(e){
        console.log(`Token error issues ${e}`);
    }
}

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


export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        return await authService.login(formData)
    } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// export const logout = createAsyncThunk('auth/login/logout', async (formData, thunkAPI) => {
//     try {
//         return await authService.logout(formData)
//     } catch (error) {
//         console.log(error)
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//         return thunkAPI.rejectWithValue(message);
//     }
// });

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.userJWTToken = AsyncStorage.getItem('userAuthToken');
        },
        logout: (state, action) => {
            state.token = null,
            AsyncStorage.removeItem('userAuthToken')
        },
        reset: (state) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = false,
                state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.registerPayload = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.registerPayload = action.payload
            })

            // ......................

            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.loginPayload = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.loginPayload = action.payload
            })

            // ......................

            // .addCase(logout.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(logout.fulfilled, (state, action) => {
            //     state.isLoading = false,
            //         state.isSuccess = true,
            //         state.logoutPayload = action.payload
            // })
            // .addCase(logout.rejected, (state, action) => {
            //     state.isLoading = false,
            //         state.isError = true,
            //         state.logoutPayload = action.payload
            // })
    }
})

export const { addToken, logout, reset } = authSlice.actions;
export default authSlice.reducer;
