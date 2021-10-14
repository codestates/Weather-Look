import React from "react";
import styled from "styled-components";
export const FooterContainer = styled.footer`
  position: absolute;
  padding-left: 370px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #e7edf6;
  bottom: 0;
  width: 100%;
`;
export const Title = styled.div`
  font-weight: bolder;
`;
export const Team = styled.div`
  color: grey;
`;
export const Call = styled.div`
  font-size: 1.7rem;
`;

const Footer = (props) => {
  return (
    <FooterContainer>
      <div>
        <Title>고객센터</Title>
        <Call>070-000-0000</Call>
        <div>평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</div>
      </div>
      <p></p>
      <Team>
        주식회사 28s 사업자번호 : 000-00-00000 | 공동 대표 : 김수경, 김효영,
        이성은, 정수창
      </Team>
    </FooterContainer>
  );
};

export default Footer;
