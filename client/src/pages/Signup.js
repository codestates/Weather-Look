import React, { useEffect, useState } from "react";
import {
  vaildEmail,
  vaildPassword,
  isMatchPassword,
} from "../utils/validation";
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
export const FormControl = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  position: relative;
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
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    console.log(isPassword);
  }, [isPassword]);

  const handelInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    setIsPassword(vaildPassword(userInfo.password));
    setIsPassword(vaildPassword(userInfo.checkPassword));
  };
  //email check fucntion
  const checkEmail = () => {
    if (!userInfo.email) {
      setErrorMsg("모든 항목은 필수입니다.");
    }
    if (!vaildEmail(userInfo.email)) {
      setErrorMsg("이메일 형식이 아닙니다.");
      ////유효성 검사 이메일 형식이 맞는지 , 이미 유효한 이메일인지 확인
    } else {
    }
  };
  const checkPassword = () => {
    //2개의 비밀번호가 일치하는지 확인
    const { password, checkPassword } = userInfo;
    console.log("check", password, checkPassword);
    if (!password || !checkPassword) {
      setErrorMsg("비밀번호를 확인해주세요.");
    }

    setIsPassword(isMatchPassword(password, checkPassword));
  };

  const checkNickname = () => {
    //유효성 검사 nickname 형식이 맞는지 , 이미 유효한 nickname 확인
  };

  const handleSignup = () => {
    const { email, password, checkPassword, nickname, gender } = userInfo;
    if (!email || !password || !checkPassword || !nickname || !gender) {
      console.log(email, password, checkPassword, nickname, gender);
      setErrorMsg("모든 항목은 필수입니다.");
    } else {
      if (isPassword) {
        //서버에 회원가입 요청 보내기
      }
    }
  };
  //email
  //password
  //check password
  //gender
  return (
    <SignupBody>
      <SignupContainer>
        <div>
          <h2>회원가입</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormControl>
            <label>이메일</label>
            <input type="email" onChange={handelInputValue("email")} />
            <FontAwesomeIcon icon={faCheckCircle} size="1x" color="black" />
            <FontAwesomeIcon
              icon={faExclamationCircle}
              size="1x"
              color="black"
            />
            <button onClick={checkEmail}>Check Email</button>
          </FormControl>
          <FormControl>
            <label>비밀번호</label>
            <input type="password" onChange={handelInputValue("password")} />
          </FormControl>
          <FormControl>
            <label>비밀번호 확인</label>
            <input
              type="password"
              onChange={handelInputValue("checkPassword")}
            />
            <button onClick={checkPassword}>Check password</button>
          </FormControl>
          <FormControl>
            <label>닉네임</label>
            <input type="password" onChange={handelInputValue("nickname")} />
            <button onClick={checkNickname}>Check Nickname</button>
          </FormControl>
          <FormControl>
            <label>성별</label>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </FormControl>
          <button type="submit" onClick={handleSignup}>
            회원가입
          </button>
          <div>{errorMsg}</div>
        </form>
      </SignupContainer>
    </SignupBody>
  );
}

export default Signup;
