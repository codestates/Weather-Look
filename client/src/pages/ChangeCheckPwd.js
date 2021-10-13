import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
const ChangeUserInfo = () => {
  const history = useHistory();
  const state = useSelector((state) => state.userReducer);

  const { email } = state.success;
  //const [isLoding, setIsLoding] = useState(true);
  const [checkPassword, setCheckPassword] = useState(false); //api요청보내면 이제 맞다 확인 후 변경될 수 있는 state
  const [passwordInfo, setPasswordInfo] = useState(""); //기존 비밀번호 일치하는지 여부 보내기위한 기존 비밀번호
  const [errorMsg, setErrorMsg] = useState("");
  //기존비밀번호 확인 요청
  console.log("checkpwd", email);
  useEffect(() => {}, [checkPassword]);

  const handleCheckPw = () => {
    //setIsLoding(false);
    axios
      .post(
        "https://localhost:4000/user/mypage/checkPassword",
        { email: email, password: passwordInfo },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.message === "ok") {
          setCheckPassword(true);
          history.push("/mypage/informationChange");
        } else {
          setCheckPassword(false);

          setErrorMsg("비밀번호를 다시 확인해주세요.");
        }
      });
  };

  const handlePasswordValue = (e) => {
    setPasswordInfo(e.target.value);
  };

  return (
    <MypageBody>
      <MypageContainer>
        <Header>회원정보수정</Header>
        <Form onSubmit={(e) => e.preventDefault()}>
          <MypageHolder>
            <FormHolder>
              <div className="title">기존 비밀번호</div>
              <Input type="password" onChange={handlePasswordValue}></Input>

              <Button onClick={handleCheckPw}>비밀번호 확인</Button>
            </FormHolder>
          </MypageHolder>
        </Form>
      </MypageContainer>
    </MypageBody>
  );
};

export default ChangeUserInfo;
