import React, { useEffect, useState } from "react";
import {
  vaildEmail,
  vaildPassword,
  isMatchPassword,
} from "../utils/validation";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

export const SignupBody = styled.div`
  background-color: #dbe2ef;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
`;
export const SignupContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 600px;
  max-width: 100%;
  min-height: 100vh;
`;
export const Form = styled.form`
  padding: 30px 40px;
`;
export const Header = styled.h1`
  background-color: #f7f7f7;
  padding: 20px;
  margin: 0 0 10px 0;
  text-align: center;
  border-bottom: 2px solid #f0f0f0;
`;
export const FormControl = styled.div`
  margin-bottom: 10px;
  padding: 20px 0;
  position: relative;
  .icon {
    position: absolute;
    top: 50px;
    right: 40px;
  }
`;
export const label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  border: 2px solid;
  border-color: ${(props) => (props.succes ? "green" : "#cc0066")};
  border-radius: 4px;
  display: block;
  width: 90%;
  font-size: 14px;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Small = styled.small`
  position: absolute;
  bottom: 0;
  left: 0;
`;

function Signup() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    checkPassword: "",
    nickname: "",
    gender: "",
  });
  const [isPassword, setIsPassword] = useState(false);
  const [isCheckPassword, setIsCheckPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setNickname] = useState(false);
  const [isRadio, setIsRadio] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();

  useEffect(() => {
    console.log(isPassword);
    console.log(isEmail);
  }, [isPassword, isEmail, isCheckPassword, isNickname, isRadio]);

  const handelInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  const checkSex = () => {
    setIsRadio(true);
  };
  //email check fucntion
  const checkEmail = () => {
    if (!userInfo.email) {
      setErrorMsg("모든 항목은 필수입니다.");
    }
    if (!vaildEmail(userInfo.email)) {
      console.log(userInfo.email);
      setErrorMsg("이메일 형식이 아닙니다.");
      ////유효성 검사 이메일 형식이 맞는지
    } else {
      setIsEmail(true);
      //axios get 요청 이미 유요한 이메일인지 확인
    }
  };
  const checkPassword = () => {
    //2개의 비밀번호가 일치하는지 확인
    const { password, checkPassword } = userInfo;
    console.log(userInfo);
    console.log("check", password, "check2", checkPassword);
    if (!password || !checkPassword) {
      setErrorMsg("비밀번호를 확인해주세요.");
    }
    if (vaildPassword(password)) {
      setIsPassword(true);
      setIsCheckPassword(isMatchPassword(password, checkPassword));
      console.log(isMatchPassword(password, checkPassword));
    }
  };

  const checkNickname = () => {
    //유효성 검사 nickname 형식이 맞는지 , 이미 유효한 nickname 확인
    if (userInfo.nickname) {
      setNickname(true);
    }
  };

  const handleSignup = () => {
    const { email, password, checkPassword, nickname, gender } = userInfo;
    if (!email || !password || !checkPassword || !nickname || !isRadio) {
      console.log(email, password, checkPassword, nickname, gender);
      setErrorMsg("모든 항목은 필수입니다.");
    } else if (
      isEmail &&
      isPassword &&
      isCheckPassword &&
      isNickname &&
      isRadio
    ) {
      setErrorMsg("회원가입완료");
      history.push("/");
      console.log("회원가입완료");
      //서버에 회원가입 요청 보내기
    }
  };
  //email
  //password
  //check password
  //gender
  return (
    <SignupBody>
      <SignupContainer>
        <Header>
          <h2>회원가입</h2>
        </Header>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormControl>
            <label>이메일</label>
            {isEmail ? (
              <Input succes type="email" onChange={handelInputValue("email")} />
            ) : (
              <Input type="email" onChange={handelInputValue("email")} />
            )}
            {isEmail ? (
              <FontAwesomeIcon
                className="icon"
                icon={faCheckCircle}
                size="1x"
                color="green"
              />
            ) : (
              <FontAwesomeIcon
                className="icon"
                icon={faExclamationCircle}
                size="1x"
                color="red"
              />
            )}

            <button onClick={checkEmail}>Check Email</button>
            <Small>{errorMsg}</Small>
          </FormControl>
          <FormControl>
            <label>비밀번호</label>
            {isPassword ? (
              <Input
                succes
                type="password"
                onChange={handelInputValue("password")}
              />
            ) : (
              <Input type="password" onChange={handelInputValue("password")} />
            )}
            <Small>{errorMsg}</Small>
          </FormControl>
          <FormControl>
            <label>비밀번호 확인</label>
            {isCheckPassword ? (
              <Input
                succes
                type="password"
                onChange={handelInputValue("checkPassword")}
              />
            ) : (
              <Input
                type="password"
                onChange={handelInputValue("checkPassword")}
              />
            )}
            <button onClick={checkPassword}>Check password</button>
            <Small>{errorMsg}</Small>
          </FormControl>
          <FormControl>
            <label>닉네임</label>
            {isNickname ? (
              <Input
                succes
                type="text"
                onChange={handelInputValue("nickname")}
              />
            ) : (
              <Input type="text" onChange={handelInputValue("nickname")} />
            )}

            <button onClick={checkNickname}>Check Nickname</button>
            <Small>{errorMsg}</Small>
          </FormControl>
          <FormControl>
            <label>성별</label>
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={checkSex}
            />{" "}
            Male
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={checkSex}
            />{" "}
            Female
            <input
              type="radio"
              value="Other"
              name="gender"
              onChange={checkSex}
            />{" "}
            Other
          </FormControl>
          <button type="submit" onClick={handleSignup}>
            회원가입
          </button>
          <Small>{errorMsg}</Small>
        </Form>
      </SignupContainer>
    </SignupBody>
  );
}

export default Signup;
