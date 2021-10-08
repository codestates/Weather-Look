import React, { useEffect, useState } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
const WeatherSearch = (props) => {
  const [searchLocal, setSearchLocal] = useState("");
  const [weatherData, setWeatherData] = useState();
  {
    /**받아온 searchLocal을 가지고 api에 그 지역의 날씨를 요청을 보냄 */
  }
  useEffect(() => {}, [searchLocal]);
  const handleInputChange = (event) => {
    //console.log("event", event.target.value);
    setSearchLocal(event.target.value);
    //console.log("searchLocal", searchLocal);
  };
  {
    /**서버로 보내나? */
  }
  const getData = () => {
    let API_URL_OpenWeatherMap = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocal}&appid=5d77f49e9933d944cfeb07670b2b4014`;
    fetch(API_URL_OpenWeatherMap)
      .then((res) => res.json())
      .then((res) => setWeatherData(res));
  };

  return (
    <>
      <div>지역검색</div>
      <input type="text" onChange={handleInputChange}></input>
      <button onClick={getData}>검색</button>
      <WeatherInfo weatherData={weatherData} />
    </>
  );
};

export default WeatherSearch;
