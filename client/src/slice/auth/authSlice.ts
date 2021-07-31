import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface State {
    token: String,
    showLogin: boolean,
    isLoading: boolean,
    isLoaded: boolean,
    isAuthenticated: boolean

}

const initialState : State = {
    token: "",
    showLogin: false,
    isLoading: false,
    isLoaded: false,
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        showLogin: (state) => {
            state.showLogin = true;
        },
        hideLogin: (state) => {
            state.showLogin = false;
        },
        isLoading: (state) => {
            state.isLoading = true;
            state.isLoaded = false;
        },
        isLoaded: (state, action: PayloadAction<String>) => {
            state.isLoading = false;
            state.isLoaded = true;
            state.showLogin = false;
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = "";
            state.showLogin = true;
            state.isLoaded = false;
            state.isAuthenticated = false;
            state.isLoading = false;
        }
    }
})

export const { showLogin, hideLogin, isLoading, isLoaded, logout} = authSlice.actions;

export const authState = (state : RootState) => state.auth;

export default authSlice.reducer;