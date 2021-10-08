import React, { useState } from "react";
import WeatherSearch from "../WeatherSearch/WeatherSearch";
import RopaList from "../RopaList/RopaList";
import { RopaState } from "../../dummydata/dummydata";

const TodayWeather = (props) => {
  const [items, setItems] = useState(RopaState.items);
  return (
    <>
      <h1>today's weather</h1>
      <WeatherSearch />
      <RopaList items={items} />
    </>
  );
};

export default TodayWeather;
