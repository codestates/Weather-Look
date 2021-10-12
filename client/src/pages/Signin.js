import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isCloseModal, isLogin } from "../actions/index";

axios.defaults.withCredentials = true;

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
          { withCredentials: true }
        )
        .then((res) => {
          console.log("login", res);
        });
      dispatch(isLogin());
      dispatch(isCloseModal());
      axios
        .post(
          "https://www.weatherLooks.com/user/login",
          {
            email,
            password,
          },
          { "Content-Type": "application/json" }
        )
        .then((res) => console.log(res));
    }
  };

  return (
    <div className="loginContainer">
      <div className="inputField">
        <div>Email</div>
        <input
          name="user-email"
          onChange={handleInputValue("email")}
          type="email"
        />
      </div>
      <div>password</div>
      <input type="password" onChange={handleInputValue("password")} />
      <button className="loginBtn" type="submit" onClick={loginRequestHandler}>
        로그인
      </button>
      <div className="alert">{errorMsg}</div>
    </div>
  );
}

export default Signin;
