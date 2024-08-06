import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../slices/weatherSlice";

function* fetchWeather(action) {
  try {
    const { location } = action.payload;
    const response = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6c078c624571d45640c8a7bf449bddfd`
    );
    yield put(fetchWeatherSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* watchFetchWeather() {
  yield takeLatest(fetchWeatherRequest.type, fetchWeather);
}

export default function* rootSaga() {
  yield all([watchFetchWeather()]);
}
