import React, { useEffect, useState } from "react";
import WeatherSearch from "../WeatherSearch/WeatherSearch";
import RopaList from "../RopaList/RopaList";
import { RopaState } from "../../utils/dummydata/dummydata";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: white;
  //background-color: red;
  //flex: 1;
`;

const TodayWeather = (props) => {
  const state = useSelector((state) => state.userReducer.weatherOk);
  const { temp } = state.main || 20;
  //  console.log("today-------", temp);
  const temp8 = RopaState.clothes8;
  const temp9 = RopaState.clothes9;
  const temp17 = RopaState.clothes17;
  const temp23 = RopaState.clothes23;
  const [dummy, setDummy] = useState();
  useEffect(() => {
    if (temp <= 8) {
      setDummy(temp8);
    } else if (temp <= 16) {
      setDummy(temp9);
    } else if (temp <= 24) {
      setDummy(temp17);
    } else {
      setDummy(temp23);
    }
  }, [temp]);

  return (
    <>
      {temp ? (
        <>
          {" "}
          <Title>today's weather? </Title>
          <WeatherSearch />
          <RopaList items={dummy} />
        </>
      ) : (
        <>
          <Title>today's weather</Title>
          <WeatherSearch items={temp17} />
        </>
      )}
    </>
  );
};

export default TodayWeather;
