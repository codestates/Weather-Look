import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { isCloseModal, isLogin } from "../actions/index";

axios.defaults.withCredentials = true;

export const LoginContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  margin: 20px 0 20px 0;
  background: #fafafa;
  border: 1px solid #eeeeee;
  padding: 15px;
  width: 93%;
`;

export const Button = styled.button`
  background-color: ${(props) => props.color || "#ff9e0f"};
  border: 1px solid #ddd;
  color: #ffffff;
  padding: 18px;
  margin: 30px 0 10px;
  width: 100%;
  cursor: pointer;
`;

function Signin() {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleInputValue = (key) => (e) => {
    console.log("key", key, "e", e);
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
    console.log("inputvalue", loginInfo);
  };
  const closeModalHandler = () => {
    dispatch(isCloseModal());
  };
  const loginRequestHandler = () => {
    //입력한 값이 다 채워져있는지 확인 후
    //입력받은 로그인정보를 서버에 요청
    console.log("loginInfo", loginInfo);
    const { email, password } = loginInfo;
    if (!email || !password) {
      setErrorMsg("이메일과 비밀번호를 확인해주세요");
    } else {
      //axios
      axios
        .post(
          "https://localhost:4000/user/login",
          { email, password },
          { withCredentials: true, "Content-Type": "application/json" }
        )
        .then((res) => {
          console.log("login", res);
        });
      dispatch(isLogin());
      dispatch(isCloseModal());
    }
  };

  return (
    <LoginContainer>
      <div className="inputField">
        <div>Email</div>
        <Input
          name="user-email"
          onChange={handleInputValue("email")}
          type="email"
        />
      </div>
      <div>Password</div>
      <Input type="password" onChange={handleInputValue("password")} />
      <div className="alert">{errorMsg}</div>
      <Button type="submit" onClick={loginRequestHandler}>
        로그인
      </Button>
      <Button color="#E7EDF6" onClick={closeModalHandler}>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          회원가입하기
        </Link>
      </Button>
    </LoginContainer>
  );
}

export default Signin;
