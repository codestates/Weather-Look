import React from "react";

const WeatherInfo = ({ weatherData }) => {
  console.log("data---", weatherData);
  return (
    <>
      <h1>weather info</h1>
      <h2>오늘의 {weatherData.name} 날씨</h2>
      <div>온도: {(weatherData.main.temp - 273.15).toFixed(1)}°</div>
      <div>최고기온: {(weatherData.main.temp_max - 273.15).toFixed(1)}°</div>
      <div>최저기온: {(weatherData.main.temp_min - 273.15).toFixed(1)}°</div>
      <div>날씨: {weatherData.weather[0].main}</div>
    </>
  );
};

export default WeatherInfo;
