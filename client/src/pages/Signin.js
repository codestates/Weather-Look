import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { isCloseModal, authSuccess, isLogin } from "../actions/index";
import { vaildEmail } from "../utils/validation";

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
  const history = useHistory();
  const state = useSelector((state) => state.userReducer);
  //console.log("로그", state);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  useEffect(() => {}, [checkEmail]);

  const isAuthenticated = (data) => {
    if (!data.success) {
      return;
    } else {
      dispatch(isLogin());
      dispatch(isCloseModal());
      //setUserinfo(data);
      history.push("/");
    }
  };

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const closeModalHandler = () => {
    dispatch(isCloseModal());
    history.push("/signup");
  };

  const loginRequestHandler = () => {
    //입력한 값이 다 채워져있는지 확인 후
    //입력받은 로그인정보를 서버에 요청

    const { email, password } = loginInfo;

    if (!email || !password) {
      setErrorMsg("이메일과 비밀번호를 확인해주세요");
    } else if (!vaildEmail(email)) {
      setErrorMsg("이메일 형식이 맞는지 확인해주세요");
    } else {
      setCheckEmail(true);
      //axios
      axios
        .post(
          "https://localhost:4000/user/login",
          { email, password },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("login", res.data.message);
          if (res.data.message === "ok") {
            dispatch(authSuccess());
            isAuthenticated(state);
          } else {
            setErrorMsg("비밀번호를 확인해주세요");
          }
        });
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
      <Button onClick={loginRequestHandler}>로그인</Button>
      <Button color="#B6C8FA" onClick={closeModalHandler}>
        회원가입하기
      </Button>
    </LoginContainer>
  );
}

export default Signin;
