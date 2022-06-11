import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import mainReducer from "./features/main/mainSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        agents: mainReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
});