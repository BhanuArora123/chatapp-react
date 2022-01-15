import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import notiSlice from "./noti";
const store = configureStore({
    reducer : {
        auth : authSlice.reducer,
        noti : notiSlice.reducer
    }
});

export default store;