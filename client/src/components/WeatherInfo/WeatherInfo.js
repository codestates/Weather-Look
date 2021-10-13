import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const WeatherContainer = styled.div`
  text-align: center;
  background-color: rgba(247, 247, 247, 0.7);
  width: 500px;
  height: 250px;
  margin-left: 38%;
  margin-top: 3%;
  border-radius: 10px;
`;
export const Title = styled.div`
  padding-top: 20px;
  padding-bottom: 18px;
  font-size: 2rem;
`;
export const WeatherHolder = styled.div`
  font-size: 1.3rem;
`;

const WeatherInfo = () => {
  const state = useSelector((state) => state.weatherReducer);
  const state1 = useSelector((state) => state.userReducer);
  useEffect(() => {
    console.log(state1);
  }, []);
  console.log("data---", state);
  return (
    <WeatherContainer>
      {/**<Title>오늘의 {state.data.name} 날씨</Title>
      <WeatherHolder>
        <img
          src={`http://openweathermap.org/img/w/${state.data.weather[0].icon}.png`}
          alt="backgroud"
        />

        <div>날씨: {state.data.weather[0].main}</div>

        <div>온도: {(state.data.main.temp - 273.15).toFixed(1)}°</div>
        <div>최고기온: {(state.data.main.temp_max - 273.15).toFixed(1)}°</div>
        <div>최저기온: {(state.data.main.temp_min - 273.15).toFixed(1)}°</div>
      </WeatherHolder> */}
    </WeatherContainer>
  );
};

export default WeatherInfo;
