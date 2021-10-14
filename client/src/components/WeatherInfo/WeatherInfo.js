import React, { useEffect } from "react";
import styled from "styled-components";
import { weatherSuccess } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  // console.log("winfo---", searchLocal);

  const searchLocal = "seoul";

  useEffect(() => {
    dispatch(weatherSuccess({ searchLocal }));
  });
  console.log("data---", state.weatherOk);
  return (
    <WeatherContainer>
      {/**<Title>오늘의 {state.weatherOk.name} 날씨</Title>
      <WeatherHolder>
        <img
          src={`http://openweathermap.org/img/w/${state.weatherOk.weather[0].icon}.png`}
          alt="backgroud"
        />

        <div>
          날씨:
          {
            //state.weatherOk.weather[0].main}
          }
        </div>
        <div>온도: {state.weatherOk.main.temp.toFixed(1)}°</div>
        <div>최고기온: {state.weatherOk.main.temp_max.toFixed(1)}°</div>
        <div>최저기온: {state.weatherOk.main.temp_min.toFixed(1)}°</div>
      </WeatherHolder> */}
    </WeatherContainer>
  );
};

export default WeatherInfo;
