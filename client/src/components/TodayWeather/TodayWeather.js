import React, { useState } from "react";
import WeatherSearch from "../WeatherSearch/WeatherSearch";
import RopaList from "../RopaList/RopaList";
import { RopaState } from "../../reducers/dummydata/dummydata";
import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: black;
  //flex: 1;
`;

const TodayWeather = (props) => {
  const [items, setItems] = useState(RopaState.items);
  return (
    <>
      <Title>today's weather</Title>
      <WeatherSearch />
      <RopaList items={items} />
    </>
  );
};

export default TodayWeather;
