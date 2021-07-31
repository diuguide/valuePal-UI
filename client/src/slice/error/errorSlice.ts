import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface State {
    showMsg: boolean,
    msg: String
}

const initialState : State = {
    showMsg: false,
    msg: ""
}

export const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        showMessage: (state, action : PayloadAction<String>) => {
            state.msg = action.payload;
            state.showMsg = true;
        },
        hideMessage: (state) => {
            state.msg = "";
            state.showMsg = false;
        }
    }
})

export const { showMessage, hideMessage } = errorSlice.actions;

export const errorState = (state: RootState) => state.error;

export default errorSlice.reducer;
