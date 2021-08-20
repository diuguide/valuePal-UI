import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { yahoo } from "../../utilities/stockData";

interface State {
  data: object;
  showData: boolean;
  dataLoading: boolean;
  dataLoaded: boolean;
}

const initialState: State = {
  data: {},
  showData: false,
  dataLoading: false,
  dataLoaded: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.dataLoading = true;
      state.dataLoaded = false;
    },
    isLoaded: (state) => {
      state.data = yahooSummary.fulfilled;
      state.dataLoading = false;
      state.dataLoaded = true;
    },
  },
});

const endpoint = "market/v2/get-summary";
const params = {
  region: "BR",
};

export const yahooSummary = createAsyncThunk("data/fetchSummmary", async () => {
  const response = await yahoo(params, endpoint);
  return response;
});

export const { isLoading, isLoaded } = dataSlice.actions;

export const dataState = (state: RootState) => state.data;

export default dataSlice.reducer;
