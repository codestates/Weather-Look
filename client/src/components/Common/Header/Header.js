import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { SigninModal } from "../SigninModal/SiginModal";
import { useSelector, useDispatch } from "react-redux";
import { isLogin, isLogout, isOpenModal } from "../../../actions";
import axios from "axios";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding-right: 300px;
  padding-left: 350px;
  padding-top: 20px;

  //padding: 0.5em 1em;
  //border-bottom: 3px solid white;
  .logo {
    display: flex;
    align-items: center;
    padding-right: 2em;
  }
  .h1 {
    color: white;
    margin: 15px;
  }
  .Link {
    font-size: 17px;
    font-weight: 600;
    &:hover {
      color: red;
    }
    color: white;
  }
`;

export const Button = styled.button`
  padding-left: 4em;
  padding-right: 3.5em;
  background-color: transparent;
  border: none;
  font-size: 17px;
  font-weight: 600;
  color: white;

  &:hover {
    color: red;
    cursor: pointer;
    size: 2x;
  }
`;

function Header() {
  //console.log("header", handleResSuccess);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const { login, openModal } = state;
  const history = useHistory();
  useEffect(() => {}, [login]);

  const openModalHandler = () => {
    dispatch(isOpenModal());
  };

  const handleLoout = () => {
    dispatch(isLogout());
    alert("로그아웃 완료");
    history.push("/");
  };

  return (
    <HeaderContainer>
      <div className="logo">
        <FontAwesomeIcon icon={faCloudSun} size="3x" color="white" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="h1">WeatherLook</h1>
        </Link>
      </div>
      <div className="button">
        {/** mypage를 누르면 로그인상태일때는 마이페이지로 가고 그게 아니면 로그인 모달이 떠야한다.  */}
        {login ? (
          <Link
            className="Link"
            to="/mypage"
            style={{ textDecoration: "none" }}
          >
            마이페이지
          </Link>
        ) : (
          <Link
            className="Link"
            to="/"
            style={{ textDecoration: "none" }}
            onClick={openModalHandler}
          >
            마이페이지
          </Link>
        )}
        {!login ? (
          <Button onClick={openModalHandler} className="button">
            로그인
          </Button>
        ) : (
          <Button onClick={handleLoout} className="button">
            로그아웃
          </Button>
        )}

        {openModal && !login ? (
          <>
            <SigninModal openModalHandler={openModalHandler} />
          </>
        ) : null}
        {/**{isLogin ? <Button>logout</Button> : <Button onClick={handleLogin}>login</Button>}
        {isOpenModal ? <SigninModal /> : null} */}
      </div>
    </HeaderContainer>
  );
}

export default Header;
