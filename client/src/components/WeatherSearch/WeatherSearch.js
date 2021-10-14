import React, { useEffect, useState } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import SigninModal from "../Common/SigninModal/SiginModal";
import { isOpenModal, weatherSuccess } from "../../actions";

export const InputWrapper = styled.div`
  //position: absolute;
  //transform: translate(-50%, -50%);
  left: 50%;
`;
export const InputHolder = styled.div`
  border: transparent;
  position: relative;
  max-width: 350px;
  margin: 0 auto;
`;
export const Input = styled.input`
  background-color: dbe2ef;
  outline: 0;
  border: 0;
  border-radius: 50px;
  display: block;
  width: 100%;
  padding: 20px;
  padding-right: 60px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 30px;
  ::placeholder {
    color: grey;
    font-size: 16px;
  }
`;
export const Button = styled.button`
  background-color: white;
  color: #ff9e0f;
  position: absolute;
  border-radius: 30px;
  border: 2px solid #ff9e0f;
  width: 4em;
  height: 4em;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  &:hover {
    background-color: #ff9e0f;
    color: white;
  }
`;
const WeatherSearch = () => {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [searchLocal, setSearchLocal] = useState("seoul");
  const [getWeather, setGetWeather] = useState(false);

  {
    /**받아온 searchLocal을 가지고 api에 그 지역의 날씨를 요청을 보냄 */
  }
  useEffect(() => {}, [searchLocal]);

  const handleInputChange = (event) => {
    //console.log("event", event.target.value);
    setSearchLocal(event.target.value);
    //console.log("searchLocal", searchLocal);
  };
  const handleWeaherInfo = () => {
    console.log("search");

    dispatch(weatherSuccess({ searchLocal }));
  };
  {
    /**서버로 보내나? 
     * const getData = () => {
    let API_URL_OpenWeatherMap = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocal}&appid=5d77f49e9933d944cfeb07670b2b4014`;
    axios
      .get(API_URL_OpenWeatherMap)
      .then((res) => {
        setWeatherData(res.data);
        setGetWeather(true);
      })
      .catch((error) => console.log(error));
  };
  const openModalHandler = () => {
    dispatch(isOpenModal());
  };*/
  }

  return (
    <>
      <InputWrapper>
        <InputHolder>
          <Input
            type="text"
            placeholder="지역을 입력하세요..."
            onChange={handleInputChange}
          ></Input>

          {state.login ? (
            <Button onClick={handleWeaherInfo}>
              <FontAwesomeIcon icon={faSearch} size="2x" />
            </Button>
          ) : (
            <Button>
              <FontAwesomeIcon icon={faSearch} size="2x" />
            </Button>
          )}
        </InputHolder>
      </InputWrapper>
      <WeatherInfo />
      {state.openModal ? <SigninModal /> : null}
    </>
  );
};

export default WeatherSearch;
