import React, { useState, useRef, useEffect } from "react";
import Ropa from "../Ropa/Ropa";
import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: white;
  margin: 10px 0 40px 0;
`;
export const RopaContainer = styled.div`
  display: table;
  overflow: hidden;
  position: relative;
  width: 1280px;
  margin: 0 auto;
  height: 400px;
`;
export const Slides = styled.ul`
  //display: table-cell;
  padding: 2.5rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 2640px;
  margin: 0;
`;

export const Controls = styled.p`
  text-align: center;
  margin: 0;
  //margin-top: 50px;
`;
export const Control = styled.button`
  margin: 0;
  all: unset;
  border: 3px solid white;
  padding: 0.5em 2em;
  color: white;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bolder;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const TOTAL_SLIDES = 7;
const RopaList = ({ items }) => {
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
  }, [curSlide]);
  return (
    <>
      <Title>오늘의 추천 옷</Title>
      <RopaContainer>
        <Slides className="slides" ref={slideRef}>
          {items.map((item, idx) => (
            <Ropa item={item} key={idx} />
          ))}
        </Slides>
      </RopaContainer>
      <Controls>
        <Control className="prev" onClick={prevSlide}>
          prev
        </Control>
        <Control className="next" onClick={nextSlide}>
          next
        </Control>
      </Controls>
    </>
  );
};

export default RopaList;
