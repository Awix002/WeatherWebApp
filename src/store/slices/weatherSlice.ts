import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
    loading: false,
    error: null,
  },

  reducers: {
    fetchWeatherRequest: (state) => {
      state.loading = true;
    },

    fetchWeatherSuccess: (state, action) => {
      console.log(action);
      state.weather = action.payload;
      state.loading = false;
    },

    fetchWeatherFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } =
  weatherSlice.actions;

export default weatherSlice.reducer;
