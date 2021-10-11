import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { SiginModal } from "../SigninModal/SiginModal";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0.5em 1em;
  background: #2c2891;
  .logo {
    display: flex;
    align-items: center;
    padding-right: 2em;
  }
  .h1 {
    color: white;
  }
  .Link {
    &:hover {
      color: red;
    }
    color: white;
  }
`;

export const Button = styled.button`
  padding-right: 2em;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: white;

  &:hover {
    color: red;
  }
`;

function Header({ isLogin, setIsLogin }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const history = useHistory();
  useEffect(() => {}, [isLogin]);

  const openModalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleLoout = () => {
    setIsLogin(!isLogin);
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
        {isLogin ? (
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
        {!isLogin ? (
          <Button onClick={openModalHandler} className="button">
            로그인
          </Button>
        ) : (
          <Button onClick={handleLoout} className="button">
            <Link to="/" />
            로그아웃
          </Button>
        )}

        {isOpenModal && !isLogin ? (
          <>
            <SiginModal
              openModalHandler={openModalHandler}
              setIsLogin={setIsLogin}
            />
          </>
        ) : null}
        {/**{isLogin ? <Button>logout</Button> : <Button onClick={handleLogin}>login</Button>}
        {isOpenModal ? <SigninModal /> : null} */}
      </div>
    </HeaderContainer>
  );
}

export default Header;
