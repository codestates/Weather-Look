import React, { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
position: relative;
display:flex;
justify-content: center;
text-align: center;
margin-top: 10%;
`;

export const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
 position: fixed;
 background-color: rgba(0,0,0,0.5);
 width: 100vw;
 height: 100vh;
 left: 0;
 top: 0;
`;

export const ModalBtn = styled.button`
  
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
// TODO : Modal창 CSS를 구현합니다.
background-color: skyblue;
margin-left: 30%;
margin-top: 10%;
z-index: 100;
width: 280px;
height: 100px;
padding-top: 10px;
`;

export const SiginModal = ({openModalHandler}) => {
 
    const ModalHandler = () => {
        openModalHandler()
    }

  return (
    <>
    <ModalContainer>
          <ModalBackdrop>
            <ModalView>
              <div onClick={ModalHandler} >닫기</div>
              <div>로그인</div>
            </ModalView>
          </ModalBackdrop>
      </ModalContainer>
    </>
  );
};

export default SiginModal;