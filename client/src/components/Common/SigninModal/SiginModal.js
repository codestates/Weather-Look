import styled from "styled-components";
import Signin, { Button } from "../../../pages/Signin";
import { useDispatch } from "react-redux";
import { isCloseModal } from "../../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 10%;
  z-index: 1000;
`;

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`;

export const ModalBtn = styled.button`
  background-color: #ff9e0f;
  color: white;
  text-decoration: none;
  border: 1px solid #ff9e0f;
  padding: 5px 8px;
  //color: white;
  border-radius: 100px;
  cursor: grab;
  &:hover {
    background-color: white;
    color: #ff9e0f;
  }
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog",
}))`
  border-radius: 20px;
  background-color: #dbe2ef;
  margin-left: 30%;
  margin-top: 10%;
  z-index: 100;
  width: 60em;
  height: 40em;
  padding-top: 10px;
`;

export function SigninModal() {
  const dispatch = useDispatch();

  const ModalHandler = () => {
    dispatch(isCloseModal());
  };

  return (
    <>
      <ModalContainer>
        <ModalBackdrop>
          <ModalView>
            <ModalBtn onClick={ModalHandler}>
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </ModalBtn>
            <h1>로그인</h1>
            <Signin />
          </ModalView>
        </ModalBackdrop>
      </ModalContainer>
    </>
  );
}

export default SigninModal;
