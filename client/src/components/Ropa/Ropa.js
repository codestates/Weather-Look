import React from "react";
import styled from "styled-components";

export const Image = styled.img`
  width: 210px;
  height: 210px;
  margin: 0.5rem;
  border: 1px solid #d8d8d8;
`;
export const List = styled.li`
  display: inline-block;
  width: 230px;
  height: 280px;
  border: solid rgb(238, 238, 238) 0.1rem;
  margin: 0.5rem;
  background-color: white;
  &:hover {
    background-color: rgba(247, 247, 247);
    box-shadow: 20px 20px 20px #3f00c71a;
  }
  border: 1px solid #d8d8d8;
  list-style: none;
  //float: left;
`;

const Ropa = ({ item }) => {
  return (
    <List className="slide">
      <Image src={item.img}></Image>
    </List>
  );
};

export default Ropa;
