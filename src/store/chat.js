import { createSlice } from "@reduxjs/toolkit";
import { notiActions } from "./noti";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        currentChatEmail : "test12345@gmail.com",
        chats : []
    },
    reducers : {
        storeEmailAndChats (state,actions){
            state.currentChatEmail = actions.payload.email;
            state.chats = actions.payload.chats;
        }
    }
})
export const chatActions = chatSlice.actions;
export const fetchChats = (email) => {
    return async (dispatch) => {
        dispatch(notiActions.changeNoti({
            notiData : {
                type : "info",
                message : "fetching Chats!"
            }
        }));
        let res = await fetch("https://chatappbackend123456.herokuapp.com/login",{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                email
            })
        });
    }
}
export default chatSlice;