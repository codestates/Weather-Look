import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const MypageBody = styled.div`
  background-color: #dbe2ef;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
`;
export const MypageContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 600px;
  max-width: 100%;
  min-height: 100vh;
`;
export const Header = styled.h1`
  background-color: #f7f7f7;
  padding: 20px;
  margin: 0 0 10px 0;
  text-align: center;
  border-bottom: 2px solid #f0f0f0;
`;
export const Form = styled.form`
  padding: 30px 150px;
`;
export const MypageHolder = styled.div`
  margin-bottom: 10px;
  padding: 20px 0;
  position: relative;
`;
export const FormHolder = styled.div`
  margin-bottom: 30px;
  .title {
    margin: 10px 0 1px 50px;
    font-size: 17px;
    font-weight: bolder;
    //border: 1px solid;
    width: 150px;
  }
`;
export const Input = styled.input`
  margin: 5px 0 6px 50px;
  padding: 5px;
  font-size: 17px;
`;
export const Button = styled.button`
  border: transparent;
  padding: 10px 30px;
  margin-left: 65px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  background-color: #ff9e0f;
  &:hover {
    background-color: white;
    color: #ff9e0f;
    border: 1px solid #ff9e0f;
  }
`;
export const Btn = styled.button`
  border: transparent;
  padding: 5px 10px;
  margin-left: 50px;
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
const ChangeUserInfo = (props) => {
  const state = useSelector((state) => state.userReducer);
  const { email } = state.success;
  const [checkPassword, setCheckPassword] = useState(false); //api요청보내면 이제 맞다 확인 후 변경될 수 있는 state
  const [passwordInfo, setPasswordInfo] = useState("");
  const [useNickname, setUseNickname] = useState(false);
  const [changeNN, setchangeNN] = useState("");
  const [changePWD, setChangePWD] = useState("");
  const [changeNewPWD, setChangeNewPWD] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const checkNicknameHandler = () => {
    axios
      .post(
        "https://localhost:4000/user/signup/checkNickname",
        { nickname: changeNN },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.message === "ok") {
          setUseNickname(true);
          console.log("use--", useNickname);
        } else {
          setErrMessage("사용 중인 닉네임입니다. 다른 닉네임으로 변경하세요");
        }
      });
  };
  const handlePasswordValue = (e) => {
    setPasswordInfo(e.target.value);
  };
  const handleCheckPw = () => {
    axios
      .post(
        "https://localhost:4000/user/mypage/checkPassword",
        { email: email, password: passwordInfo },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.message === "ok") {
          setCheckPassword(true);
        } else {
          setErrorMsg("비밀번호를 다시 확인해주세요.");
        }
      });
  };
  const changeName = (e) => {
    setchangeNN(e.target.value);
  };
  const changePasswordHandler = (e) => {
    setChangePWD(e.target.value);
  };
  const changeNewPWDHandler = (e) => {
    setChangeNewPWD(e.target.value);
  };
  const checkPWD = () => {
    if (changePWD !== changeNewPWD) {
      setErrMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setErrMsg("");
    }
  };
  const changeInfoHandler = () => {
    axios
      .patch(
        `https://localhost:4000/user/inform`,
        {
          email,
          nickname: changeNN,
          password: changePWD,
        },
        { withCredentials: true }
      )
      .then((res) => console.log(res));
  };
  return (
    <MypageBody>
      <MypageContainer>
        <Header>회원정보수정</Header>
        <Form onSubmit={(e) => e.preventDefault()}>
          <MypageHolder>
            {!checkPassword ? (
              <FormHolder>
                <div className="title">기존 비밀번호</div>
                <Input type="password" onChange={handlePasswordValue}></Input>
                <div>{errorMsg}</div>
                <Button onClick={handleCheckPw}>비밀번호 확인</Button>
                {/**axios 비밀번호 일치하는지 여부 확인 => 응답으로 일치하는 것을 확인하며 변경할 수 있는 창 보여주기 */}
              </FormHolder>
            ) : (
              <FormHolder>
                <div className="title">닉네임</div>
                {/**<div>이미 사용 중인 닉네임입니다.</div>  db에서 같이 닉네임이 있는지 여부 확인 후 사용여부 보내주기*/}
                <Input type="text" onChange={changeName}></Input>
                <Btn onClick={checkNicknameHandler}>닉네임 중복 확인</Btn>
                {useNickname ? (
                  <div>사용 가능한 닉네임입니다.</div>
                ) : (
                  <div>{errMessage}</div>
                )}
                <Btn onClick={changeInfoHandler}>닉네임 변경</Btn>
                <div className="title">새로운 비밀번호</div>
                <Input type="password" onChange={changePasswordHandler}></Input>
                <div className="title">새로운 비밀번호 확인</div>
                <Input type="password" onChange={changeNewPWDHandler}></Input>
                <div>{errMsg}</div>
                <Btn onClick={checkPWD}>비밀번호 확인</Btn>

                <Btn className="change-btn" onClick={changeInfoHandler}>
                  비밀번호 변경
                </Btn>
                {/**API 메소드 put - 자원 전체 교체/ patch - 자원 일부 교체시 여기에서는 그렴 patch 사용 */}
                <div>
                  <Btn>회원가입탈퇴</Btn>
                </div>
                {/* 버튼 누른 뒤 다시 한 번 확인하는 창 띄워주고 거기서 확인을 누르면 axios user Delete 삭제 요청 보내기 */}
              </FormHolder>
            )}
          </MypageHolder>
        </Form>
      </MypageContainer>
    </MypageBody>
  );
};

export default ChangeUserInfo;
