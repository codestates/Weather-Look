import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { logoutUserInfo } from "../actions/index";

axios.defaults.withCredentials = true;

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
  const dispatch = useDispatch();
  const history = useHistory();
  const { email } = state.success;

  const [errorMsg, setErrorMsg] = useState(""); //기존 비밀번호 확인

  const [changeNN, setchangeNN] = useState(""); //새로운 닉네임
  //const [errMessage, setErrMessage] = useState(""); //변경 닉네임 중복확인

  const [changePWD, setChangePWD] = useState(""); //새로운 비밀번호값
  const [changeNewPWD, setChangeNewPWD] = useState(""); //새로운 비밀번호 확인값넣은거
  //const [errMsg, setErrMsg] = useState(""); //새로운 비밀번호 와 비밀번호 일치여부
  //기존비밀번호 확인 요청
  useEffect(() => {}, [setErrorMsg]);
  //같은 닉네임 있는지 여부 확인 요청
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
        console.log("hy", res.data);
        if (res.data.message === "ok") {
          setErrorMsg("사용 가능한 닉네임입니다.");
        }
      })
      .catch((err) => {
        setErrorMsg("사용 중인 닉네임입니다. 다른 닉네임으로 변경하세요");
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
    console.log(changePWD, changeNewPWD);
    if (changePWD !== changeNewPWD) {
      setErrorMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMsg("비밀번호 확인완료 ");
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
  const signoutHandler = () => {
    axios
      .delete(
        `https://localhost:4000/user/signout`,
        { data: { email } },
        { withCredentials: true }
      )
      .then((res) => {
        //여기 부분 나중에 확인
        if (res.data.message === "success") {
          dispatch(logoutUserInfo());
          history.push("/");
        }
      });
  };

  return (
    <MypageBody>
      <MypageContainer>
        <Header>회원정보수정</Header>
        <Form onSubmit={(e) => e.preventDefault()}>
          <MypageHolder>
            <FormHolder>
              <div className="title">닉네임</div>
              <Input type="text" onChange={changeName}></Input>
              <Btn onClick={checkNicknameHandler}>닉네임 중복 확인</Btn>
              <Btn onClick={changeInfoHandler}>닉네임 변경</Btn>
              <div className="title">새로운 비밀번호</div>
              <Input type="password" onChange={changePasswordHandler}></Input>
              <div className="title">새로운 비밀번호 확인</div>
              <Input type="password" onChange={changeNewPWDHandler}></Input>
              <Btn onClick={checkPWD}>비밀번호 확인</Btn>
              <div>{errorMsg}</div>
              <Btn className="change-btn" onClick={changeInfoHandler}>
                비밀번호 변경
              </Btn>
              {/**API 메소드 put - 자원 전체 교체/ patch - 자원 일부 교체시 여기에서는 그렴 patch 사용 */}
              <div>
                <Btn onClick={signoutHandler}>회원가입탈퇴</Btn>
              </div>
              {/* 버튼 누른 뒤 다시 한 번 확인하는 창 띄워주고 거기서 확인을 누르면 axios user Delete 삭제 요청 보내기 */}
            </FormHolder>
          </MypageHolder>
        </Form>
      </MypageContainer>
    </MypageBody>
  );
};

export default ChangeUserInfo;
