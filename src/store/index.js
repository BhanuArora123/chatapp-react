import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import chatSlice from "./chat";
import notiSlice from "./noti";
const store = configureStore({
    reducer : {
        auth : authSlice.reducer,
        noti : notiSlice.reducer,
        chat : chatSlice.reducer
    }
});

export default store;