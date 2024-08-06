import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherRequest } from "../store/slices/weatherSlice";

const WeatherApp = () => {
  const dispatch = useDispatch();
  const { weather, loading } = useSelector((state) => state.weather);

  const [location, setLocation] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSearchClick = () => {
    if (location) {
      dispatch(fetchWeatherRequest({ location }));
    }
  };

  if (loading) return <p className="text-center text-xl">Loading...</p>;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">Weather Information</h2>
      <div className="flex space-x-4">
        <input
          type="text"
          className="w-full max-w-xs h-10 px-4 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter location"
        />
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      {weather && (
        <div className="mt-8 w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
          <p className="text-xl font-semibold">Location: {weather.name}</p>
          <p className="text-4xl font-bold text-blue-500">
            {weather.main.temp}°F
          </p>
          <p className="text-lg text-gray-700 capitalize">
            {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
