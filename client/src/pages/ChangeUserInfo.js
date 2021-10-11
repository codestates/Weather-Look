import React, { useState } from "react";

const ChangeUserInfo = (props) => {
  const [checkPassword, setCheckPassword] = useState(false);
  return (
    <div>
      <h1>회원정보수정</h1>
      <div>
        {!checkPassword ? (
          <div>
            <div>기존 비밀번호</div>
            <input type="password"></input>
            <button>비밀번호 확인</button>
            {/**axios 비밀번호 일치하는지 여부 확인 => 응답으로 일치하는 것을 확인하며 변경할 수 있는 창 보여주기 */}
          </div>
        ) : (
          <div>
            <div>닉네임</div>
            {/**<div>이미 사용 중인 닉네임입니다.</div>  db에서 같이 닉네임이 있는지 여부 확인 후 사용여부 보내주기*/}
            <input type="text"></input>
            <button>닉네임 사용확인</button>
            <div>새로운 비밀번호</div>
            <input type="password"></input>
            <div>새로운 비밀번호 확인</div>
            <input type="password"></input>
            {/**일치여부 확인 후? 창에 아무것도 없으면 변경 아니고? */}
            <div>성별</div>
            <span>남성</span>
            <input type="radio" name="gender" value="male"></input>
            <stan>여성</stan>
            <input type="radio" name="gender" value="female"></input>
            <stan>UNISEX</stan>
            <input type="radio" name="gender" value="unisex"></input>
            <button>확인</button>
            {/**API 메소드 put - 자원 전체 교체/ patch - 자원 일부 교체시 여기에서는 그렴 patch 사용 */}
            <button>회원가입탈퇴</button>
            {/* 버튼 누른 뒤 다시 한 번 확인하는 창 띄워주고 거기서 확인을 누르면 axios user Delete 삭제 요청 보내기 */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeUserInfo;
