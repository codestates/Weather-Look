import React from "react";
import { Link } from "react-router-dom";
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
`;
export const FormDiv = styled.div`
  margin-top: 20px;
  font-size: 23px;
  //border: 1px solid;
  width: 100px;
`;
export const Info = styled.div`
  border: 1px solid;
  padding: 5px;
  font-size: 20px;
`;

export const Button = styled.button`
  border: transparent;
  padding: 10px 30px;
  margin-left: 70px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bolder;
  background-color: #ff9e0f;
  .Link {
    color: white;
  }

  &:hover {
    background-color: white;
    border: 1px solid #ff9e0f;
    .Link {
      color: #ff9e0f;
    }
  }
`;

const Mypage = (props) => {
  const { userInfo } = useSelector((state) => state.userReducer);

  return (
    <MypageBody>
      <MypageContainer>
        <Header>회원정보수정</Header>
        <Form>
          <MypageHolder>
            <div>안녕하세요? {/*userInfo.nick */}님!</div>
            <FormHolder>
              <FormDiv>email</FormDiv>
              <Info>1{/* userInfo.email*/}</Info>
              <FormDiv>nickname</FormDiv>
              <Info>1{/* userInfo.nickname*/}</Info>
              <FormDiv>gender</FormDiv>
              <Info>1{/* userInfo.gender*/}</Info>
            </FormHolder>
            <Button>
              <Link
                className="Link"
                to="/mypage/informationchange"
                style={{ textDecoration: "none" }}
              >
                회원정보수정
              </Link>
            </Button>
          </MypageHolder>
        </Form>
      </MypageContainer>
    </MypageBody>
  );
};

export default Mypage;
