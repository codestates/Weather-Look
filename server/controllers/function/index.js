require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
// const fetch = require("node-fetch");

module.exports = {
  signAccessToken: (data) => {
    delete data.password;
    const accessToken = sign(data, process.env.ACCESS_SECRET); //만료기간 설정을해야할까?
    return accessToken;
  },
  sendAccessToken: (res, accessToken) => {
    /*res.set(
      "SET-cookie",
      `jwt = ${accessToken}; Domain = "https://localhost:4000"; Path = /user/login; SameSite = none; Secure = true; HttpOnly = true;`
    );
    //Lax: get method에 대해서만 쿠키를 전송
    res.json({ message: "ok" });*/
    res.cookie("jwt", accessToken, {
      httpOnly: true,
    });
    res.status(200).send({ message: "ok" });
  },
  isAuthorized: (req) => {
    console.log("jwt", req.cookies);
    const jwt = req.cookies.jwt;
    if (!jwt) {
      return null;
    } else {
      return verify(jwt, process.env.ACCESS_SECRET);
    }
  },
  // getWeatherApi: (cityname, key) => {
  //   try {
  //     return fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${key}&units=metric`
  //     );
  //   } catch {
  //     return null;
  //   }
  // },
};
