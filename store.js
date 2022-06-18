import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/Slice/loginSlice"
import userRegisterReducer from "./reducers/Slice/userRegistrationSlice"
import bankReducer from "./reducers/Slice/bankSlice"
import deviceReducer from "./reducers/Slice/deviceSlice"
import transactionReducer from "./reducers/Slice/transactionSlice"
import forgetPassReducer from "./reducers/Slice/forgetPassSlice"

export const store = configureStore({
    reducer: {
        login: loginReducer,
        registration: userRegisterReducer,
        banks: bankReducer,
        devices: deviceReducer,
        transactions: transactionReducer,
        forgetPass: forgetPassReducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
});