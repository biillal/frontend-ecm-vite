import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./slice/authSlice";
import { categoryReducers } from "./slice/categorySlice";
import { passwordReducers } from "./slice/passwordSlice";

const store = configureStore({
    reducer:{
        auth:authReducers,
        category:categoryReducers,
        password:passwordReducers
    }
})

export default store