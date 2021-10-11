import React from "react";
import styled from "styled-components";

export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-right: 30px;
`;
export const List = styled.li`
  list-style: none;
  float: left;
`;

const Ropa = ({ item }) => {
  return (
    <List className="slide">
      <Image src={item.img}></Image>
    </List>
  );
};

export default Ropa;
