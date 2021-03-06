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
import axios from "axios";

axios.defaults.withCredentials = true;

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
export const Small = styled.span`
  // position: absolute;
  bottom: 0;
  left: 0;
  color: red;
`;
export const Btn = styled.button`
  border: transparent;
  padding: 5px 10px;
  //margin-left: 50px;
  margin-bottom: 10px;
  cursor: pointer;
  color: white;
  font-size: 15px;
  font-weight: bolder;
  background-color: #ff9e0f;
  &:hover {
    background-color: white;
    color: #ff9e0f;
    border: 1px solid #ff9e0f;
  }
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
  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();

  useEffect(() => {
    //console.log(isPassword);
    //console.log(isEmail);
  }, [isPassword, isEmail, isCheckPassword, isNickname]);

  const handelInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  //email check fucntion
  const checkEmail = () => {
    if (!userInfo.email) {
      setErrorMsg("?????? ????????? ???????????????.");
    }
    if (!vaildEmail(userInfo.email)) {
      // console.log(userInfo.email);
      setErrorMsg("????????? ????????? ????????????.");
      ////????????? ?????? ????????? ????????? ?????????
    } else {
      const { email } = userInfo;
      //axios get ?????? ?????? ????????? ??????????????? ??????
      //setIsEmail(true);
      //delete userInfo.checkPassword;

      axios
        .post(
          `${process.env.REACT_APP_END_POINT}user/signup/validEmail`,
          { email },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.message === "ok") {
            setIsEmail(true);
          }
        });
    }
  };
  const checkPassword = () => {
    //2?????? ??????????????? ??????????????? ??????
    const { password, checkPassword } = userInfo;
    //console.log(userInfo);
    if (!password || !checkPassword) {
      setErrorMsg("??????????????? ??????????????????.");
    }
    if (vaildPassword(password)) {
      setIsPassword(true);
      setIsCheckPassword(isMatchPassword(password, checkPassword));
      // console.log(isMatchPassword(password, checkPassword));
    }
  };

  const checkNickname = () => {
    //????????? ?????? nickname ????????? ????????? , ?????? ????????? nickname ??????
    const { nickname } = userInfo;
    if (nickname) {
      axios
        .post(
          `${process.env.REACT_APP_END_POINT}user/signup/checkNickname`,

          { nickname },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          //console.log("nickname", res.data);
          if (res.data.message === "ok") {
            setNickname(true);
          }
        });
    } else {
      setErrorMsg("?????? ???????????? ??????????????????.");
    }
  };

  const handleSignup = () => {
    const { email, password, checkPassword, nickname, gender } = userInfo;
    if (!email || !password || !checkPassword || !nickname || !gender) {
      // console.log(email, password, checkPassword, nickname, gender);
      setErrorMsg("?????? ????????? ???????????????.");
    } else if (
      isEmail &&
      isPassword &&
      isCheckPassword &&
      isNickname &&
      gender
    ) {
      //history.push("/");
      //console.log("??????????????????");
      axios
        .post(
          `${process.env.REACT_APP_END_POINT}user/signup`,
          { userInfo },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.message === "created") {
            history.push("/");
            setErrorMsg("??????????????????");
            alert("??????????????????");
          }
        })
        .catch((err) => console.log(err));
      //????????? ???????????? ?????? ?????????
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
          <h3>????????????</h3>
        </Header>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormControl>
            <label>?????????</label>
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

            <Btn onClick={checkEmail}>Check Email</Btn>
          </FormControl>
          <FormControl>
            <label>????????????</label>
            {isPassword ? (
              <Input
                succes
                type="password"
                onChange={handelInputValue("password")}
              />
            ) : (
              <Input type="password" onChange={handelInputValue("password")} />
            )}
          </FormControl>
          <FormControl>
            <label>???????????? ??????</label>
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
            <Btn onClick={checkPassword}>Check password</Btn>
          </FormControl>
          <FormControl>
            <label>?????????</label>
            {isNickname ? (
              <Input
                succes
                type="text"
                onChange={handelInputValue("nickname")}
              />
            ) : (
              <Input type="text" onChange={handelInputValue("nickname")} />
            )}

            <Btn onClick={checkNickname}>Check Nickname</Btn>
          </FormControl>
          <FormControl>
            <label>??????</label>
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={handelInputValue("gender")}
            />{" "}
            Male
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={handelInputValue("gender")}
            />{" "}
            Female
            <input
              type="radio"
              value="Other"
              name="gender"
              onChange={handelInputValue("gender")}
            />{" "}
            Other
          </FormControl>
          <Btn type="submit" onClick={handleSignup}>
            ????????????
          </Btn>{" "}
          <Small>{errorMsg}</Small>
        </Form>
      </SignupContainer>
    </SignupBody>
  );
}

export default Signup;
