import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import errorReducer from "../slice/error/errorSlice";

export const store = configureStore({
  reducer: {
    error: errorReducer
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
