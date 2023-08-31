import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./slice/authSlice";

const store = configureStore({
    reducer:{
        auth:authReducers
    }
})

export default store