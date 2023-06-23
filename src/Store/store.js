import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import authSlice from "./authSlice";


const store = configureStore({
    reducer:{
        postStore : postSlice,
        authStore: authSlice
    }
})

export default store