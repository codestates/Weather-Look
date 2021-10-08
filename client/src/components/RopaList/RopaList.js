import React from "react";
import Ropa from "../Ropa/Ropa";
import styled from "styled-components";

export const RopaContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const RopaList = ({ items }) => {
  return (
    <>
      <h1>오늘의 추천 옷</h1>
      <RopaContainer>
        {items.map((item, idx) => (
          <Ropa item={item} key={idx} />
        ))}
      </RopaContainer>
    </>
  );
};

export default RopaList;
