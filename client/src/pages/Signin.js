import React, { useState } from "react";

function Signin({ ModalHandler, setIsLogin }) {
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
      //axios 요청 보내기
      /**const url = `https://localhost:4000/login`;
    axios
      .post(
        url,
        {
          email: email,
          password: password,
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((data) => {
        // console.log(data)
        //state = { isLogin: true, accessToken: 서버에_요청하여_받은_access_token }
        this.props.loginHandler(data.data.data.accessToken);
      }); */
      //로그인 요청이 ok이면
      //로그인 상태 -> true, accessToekn 넣어주고
      //로그인 모달 닫히고 헤더 로그인 -> 로그아웃 으로 change
      ModalHandler();

      setIsLogin(true);
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
