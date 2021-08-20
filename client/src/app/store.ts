import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import errorReducer from "../slice/error/errorSlice";
import authReducer from "../slice/auth/authSlice";
import dataReducer from "../slice/data/dataSlice";

export const store = configureStore({
  reducer: {
    error: errorReducer,
    auth: authReducer,
    data: dataReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
