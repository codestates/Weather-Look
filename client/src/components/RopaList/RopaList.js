import React, { useState, useRef, useEffect, useReducer } from "react";
import Ropa from "../Ropa/Ropa";
import styled from "styled-components";
import { useSelector } from "react-redux";
import userReducer from "../../reducers/userReducer";
import { isLogin, IS_LOGIN } from "../../actions";

export const Title = styled.h2`
  text-align: center;
  color: white;
  margin: 40px 0 0 0;
`;
export const RopaContainer = styled.div`
  display: table;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 1280px;
  margin: 0 auto;
  height: 400px;
`;
export const BlurRopaContainer = styled.div`
  display: table;
  overflow: hidden;
  position: relative;
  width: 1280px;
  margin: 0 auto;
  height: 400px;
  filter: blur(5px);
  -webkit-filter: blur(5px);
`;
export const Slides = styled.ul`
  //display: table-cell;
  padding: 2.5rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 2900px;
  margin: 0;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 700px 0 700px;
  //text-align: center;
`;
export const Control = styled.div`
  all: unset;
  border: 3px solid white;
  //border-bottom: 3px solid white;
  padding: 0.5em 2em;
  color: white;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bolder;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
    cursor: pointer;
  }
`;
const TOTAL_SLIDES = 7;
const RopaList = ({ items }) => {
  const state = useSelector((state) => state.userReducer);
  const [curSlide, setCurSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (curSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
    }
  };
  const prevSlide = () => {
    if (curSlide === 0) {
      setCurSlide(TOTAL_SLIDES);
    } else {
      setCurSlide(curSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 1s ease-in-out";
    //slideRef.current.style.transform = `translateX(-${curSlide}00%)`;
    slideRef.current.style.transform = "translateX(" + -280 * curSlide + "px)";
  }, [[], curSlide]);
  return (
    <>
      <Title>Today's WeatherLook</Title>
      <Controls>
        <Control className="prev" onClick={prevSlide}>
          prev
        </Control>
        <Control className="next" onClick={nextSlide}>
          next
        </Control>
      </Controls>
      {state.login ? (
        <RopaContainer>
          <Slides className="slides" ref={slideRef}>
            {items && items.map((item, idx) => <Ropa item={item} key={idx} />)}
          </Slides>
        </RopaContainer>
      ) : (
        <BlurRopaContainer>
          <Slides className="slides" ref={slideRef}>
            {items && items.map((item, idx) => <Ropa item={item} key={idx} />)}
          </Slides>
        </BlurRopaContainer>
      )}
    </>
  );
};

export default RopaList;
