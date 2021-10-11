import React from "react";
import Ropa from "../Ropa/Ropa";
import styled from "styled-components";

{
  /**카드 형식 부분은 라이브러리 사용해야하나..?? */
}
export const Title = styled.h1`
  margin: 10px 0 40px 0;
`;
export const RopaContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 1620px;
  margin: 0 auto;
  height: 300px;
`;
export const Slides = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  width: 2640px;
`;

export const Controls = styled.p`
  text-align: center;
  margin-top: 50px;
`;
export const Control = styled.span`
  background-color: transparent;
  color: gray;
  padding: 10px 20px;
  margin: 0 10px;
`;
const RopaList = ({ items }) => {
  return (
    <>
      <Title>오늘의 추천 옷</Title>
      <RopaContainer>
        <Slides className="slides">
          {items.map((item, idx) => (
            <Ropa item={item} key={idx} />
          ))}
        </Slides>
      </RopaContainer>
      <Controls>
        <Control className="prev">prev</Control>
        <Control className="next">next</Control>
      </Controls>
    </>
  );
};

export default RopaList;
