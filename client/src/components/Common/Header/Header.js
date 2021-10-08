import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiginModal } from "../SigninModal/SiginModal";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0.5em 1em;
  background: #afc3fa;
  .logo {
    display: flex;
    align-items: center;
    padding-right: 2em;
  }
`;

export const Button = styled.button`
  padding-right: 2em;
  background-color: transparent;
  border: none;
  font-size: 1.2em;
  color: white;
  font-weight: bold;
  &:hover {
    color: red;
  }
`;

const Header = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };
  {
    /**const [isLogin, setIsLogin] = useState(false);
  

  const handleLogin = () => {
    setIsLogin(!isLogin);
    setIsOpenModal(!isOpenModal);
  } */
  }

  return (
    <HeaderContainer>
      <div className="logo">
        <FontAwesomeIcon icon={faCloudSun} size="3x" color="white" />
        <h1>WeatherLook</h1>
      </div>
      <div className="button">
        <Link to="/mypage" style={{ textDecoration: "none" }}>
          Mypage
        </Link>
        <button onClick={openModalHandler}>Login</button>
        {isOpenModal ? (
          <SiginModal openModalHandler={openModalHandler} />
        ) : null}
        {/**{isLogin ? <Button>logout</Button> : <Button onClick={handleLogin}>login</Button>}
        {isOpenModal ? <SigninModal /> : null} */}
      </div>
    </HeaderContainer>
  );
};

export default Header;
