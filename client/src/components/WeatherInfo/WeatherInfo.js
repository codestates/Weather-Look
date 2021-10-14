import React, { useEffect } from "react";
import styled from "styled-components";
import { weatherSuccess } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
export const WeatherContainer = styled.div`
  text-align: center;
  background-color: #e7edf6;
  width: 500px;
  height: 250px;
  margin-left: 40.2%;
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
  const state = useSelector((state) => state.userReducer.weatherOk);
  //console.log("winfo---", state);

  const searchLocal = "seoul";

  useEffect(() => {
    dispatch(weatherSuccess({ searchLocal }));
  }, []);
  //console.log("data---", state.weatherOk);
  return (
    <WeatherContainer>
      {state ? (
        <>
          <Title>오늘의 {state.name} 날씨</Title>
          <WeatherHolder>
            <img
              src={`http://openweathermap.org/img/w/${state.weather[0].icon}.png`}
              alt="backgroud"
            />

            <div>
              날씨:
              {state.weather[0].main}
            </div>
            <div>온도: {state.main.temp.toFixed(1)}°</div>
            <div>최고기온: {state.main.temp_max.toFixed(1)}°</div>
            <div>최저기온: {state.main.temp_min.toFixed(1)}°</div>
          </WeatherHolder>
        </>
      ) : (
        <div>로그인후 검색하세요.</div>
      )}
    </WeatherContainer>
  );
};

export default WeatherInfo;
