import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const MypageContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;
export const Title = styled.h1``;
export const MypageHolder = styled.div`
  .Link {
    width: 15px;
    height: 5px;
    padding: 5px;
    cursor: pointer;
    color: white;
    background-color: #ff9e0f;

    &:hover {
      background-color: white;
      color: #ff9e0f;
    }
  }
`;
export const Button = styled.button`
  padding: 5px;
  margin: 2px;
  cursor: pointer;
  color: white;
  background-color: #ff9e0f;

  &:hover {
    background-color: white;
    color: #ff9e0f;
  }
`;

const Mypage = (props) => {
  const { userInfo } = useSelector((state) => state.userReducer);
  return (
    <MypageContainer>
      <Title>회원정보{/* */}</Title>
      <MypageHolder>
        <div>email{/* userInfo.email*/}</div>
        <div>nickname{/* userInfo.nickname*/}</div>
        <div>gender{/* userInfo.gender*/}</div>
        <div>
          <Link
            className="Link"
            to="/mypage/informationchange"
            style={{ textDecoration: "none" }}
          >
            회원정보수정
          </Link>
        </div>
        <Button>회원 탈퇴</Button>
      </MypageHolder>
    </MypageContainer>
  );
};

export default Mypage;
