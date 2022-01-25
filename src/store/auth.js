import { createSlice } from "@reduxjs/toolkit";
import { notiActions } from "./noti";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        loggedIn : false,
        token : ""
    },
    reducers : {
        login(state, action){
            state.loggedIn = true;
            state.token = action.payload.token;
            localStorage.setItem("token",action.payload.token);
            localStorage.setItem("userId",action.payload.userId);
        },
        logout(state, action){
            state.loggedIn = false;
            state.token = "";
            localStorage.removeItem("token");
        }
    }
})
export const authActions = authSlice.actions;
export const login = (email , password) => {
    return async (dispatch) => {
        dispatch(notiActions.changeNoti({
            notiData : {
                type : "info",
                message : "login inprogress!"
            }
        }));
        let res = await fetch("https://chatappbackend123456.herokuapp.com/login",{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                email,
                password
            })
        });
        console.log("hello");
        let data = await res.json();
        console.log(data);
        if(!res.ok){
            dispatch(notiActions.changeNoti({
                notiData : {
                    type : "error",
                    message : data.msg[0].msg
                }
            }));
            return data;
        }
        if(data){
            dispatch(authActions.login({ token : data.token }));
            dispatch(notiActions.changeNoti({
                notiData : {
                    type : "success",
                    message : data.msg
                }
            }));
            // store data to localStorage ;
            // localStorage.setItem("user",JSON.stringify(data));
            return data;
        }
}
}
export const signup = (email , password , name) => {
    return async (dispatch) => {
        dispatch(notiActions.changeNoti({
            notiData : {
                type : "info",
                message : "Signup inprogress!"
            }
        }));
        let res = await fetch("https://chatappbackend123456.herokuapp.com/signup",{
            method : "PUT",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                email,
                password,
                name
            })
        });
        console.log("hello");
        let data = await res.json();
        console.log(data);
        if(!res.ok){
            dispatch(notiActions.changeNoti({
                notiData : {
                    type : "error",
                    message : data.msg[0].msg
                }
            }));
            return data;
        }
        if(data){
            dispatch(notiActions.changeNoti({
                notiData : {
                    type : "success",
                    message : data.msg
                }
            }));
            // store data to localStorage ;
            // localStorage.setItem("user",JSON.stringify(data));
            return data;
        }
}
}
export default authSlice;