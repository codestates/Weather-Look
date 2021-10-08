import React from "react";
import { Link } from "react-router-dom";

const Mypage = (props) => {
  return (
    <div>
      <h1>회원정보</h1>
      <div>email</div>
      <div>nickname</div>
      <div>gender</div>
      <Link to="/mypage/informationchange" style={{ textDecoration: "none" }}>
        회원정보수정
      </Link>
      <button>회원 탈퇴</button>
    </div>
  );
};

export default Mypage;
