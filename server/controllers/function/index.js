require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  signAccessToken: (data) => {
    delete data.password;
    const accessToken = sign(data, process.env.ACCESS_SECRET);
    return accessToken;
  },
  sendAccessToken: (res, accessToken) => {
    res.set(
      "SET-cookie",
      `jwt = ${accessToken}; Domain = ''; Path = /user/login; SameSite = Lax; Secure = true; HttpOnly = true;`
    );
    //Lax: get method에 대해서만 쿠키를 전송
    res.json({ message: "ok" });
  },
};
