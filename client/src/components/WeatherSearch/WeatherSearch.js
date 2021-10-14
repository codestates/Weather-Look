import React, { useEffect, useState } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

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

  useEffect(() => {}, [searchLocal]);

  const handleInputChange = (event) => {
    //console.log("event", event.target.value);
    setSearchLocal(event.target.value);
    //console.log("searchLocal", searchLocal);
  };
  const handleWeaherInfo = () => {
    //console.log("search");

    dispatch(weatherSuccess({ searchLocal }));
  };
  const handelOpenModal = () => {
    dispatch(isOpenModal());
  };

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
            <Button onClick={handelOpenModal}>
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
